import React, { useState, useRef, useEffect } from "react";
import BirthdayCard from "./Stories/Content/Birthday/BirthdayCard";
import MasonryGrid from "../MasonryGrid/MasonryGrid";
import ContentCard from "./Stories/Content/ContentCard";
import { Button } from "../Button/Button";
import fakeData from "../../db.json";
import NewPost from "./NewPost";
import Modal from "../Modal/Modal";
import "./news-feed.scss";

const NewsFeed = () => {
  const postTypes = [
    { name: "text", selected: true },
    { name: "photo", selected: false },
    { name: "video", selected: false },
  ];

  const userAvatar = fakeData.userData.userImage;
  const userName = fakeData.userData.userName;
  const [stories, setStories] = useState(fakeData.stories);
  const commentRef = useRef(new Array(stories.length).fill(""));
  const [isCommentEmpty, setCommentEmptyState] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  //to fake unique id
  const [id, setId] = useState(0);
  const [buttonState, setButtonState] = useState(postTypes);
  const [inputValue, setInputvalue] = useState("");
  const [modalTextInputEmpty, setModalTextInputEmpty] = useState(true);
  const modalCommentRef = useRef("");

  //Modals Video & image Input values
  const onModalInputChange = (e) => {
    setInputvalue(e.target.value);
  };

  //Modal's video & image input cancel button
  const onModalInputCancelClick = () => {
    setInputvalue("");
  };

  //Modal's switch between Text, vide & image buttons
  const onItemClick = (i) => {
    const buttonArr = [...buttonState];
    buttonArr.forEach((type) => {
      if (type !== buttonArr[i]) {
        type.selected = false;
      }
      if (type === buttonArr[i]) {
        type.selected = true;
      }
    });
    setInputvalue("");
    modalCommentRef.current = "";
    isModalEmpty();
    setButtonState(buttonArr);
  };

  //When Modal exited, put inner modal buttons toinitial visual state
  const onItemRestart = () => {
    const buttonArr = [...buttonState];
    buttonArr.forEach((type) => {
      if (type.name === "text") {
        type.selected = true;
      } else {
        type.selected = false;
      }
    });
    setInputvalue("");
    modalCommentRef.current = "";
    isModalEmpty();
    setButtonState(buttonArr);
  };

  //Modal's text input value
  const modalInputOnChange = (e) => {
    modalCommentRef.current = e.target.value;
    isModalEmpty();
  };

  //Check if Modal's text value is empty
  const isModalEmpty = () => {
    if (modalCommentRef.current.length > 0) {
      setModalTextInputEmpty(false);
    } else {
      setModalTextInputEmpty(true);
    }
  };

  //add new post
  const addPost = () => {
    const timeOfPost = new Date();
    setId(id + 1);
    buttonState.forEach((type) => {
      if (type.name === "text" && type.selected) {
        setStories([
          ...stories,
          {
            type: "post",
            id: "aaaaa" + id,
            userName: userName,
            userImage: userAvatar,
            postLocation: "VLN",
            postDate: timeOfPost.toISOString(),
            postText: modalCommentRef.current,
            likes: 0,
            comments: [],
          },
        ]);
      } else if (type.name === "photo" && type.selected) {
        setStories([
          ...stories,
          {
            type: "photo",
            id: "aaaaa" + id,
            userName: userName,
            userImage: userAvatar,
            postLocation: "VLN",
            postDate: timeOfPost.toISOString(),
            postImage: inputValue,
            likes: 0,
            comments: [],
          },
        ]);
      } else if (type.name === "video" && type.selected) {
        setStories([
          ...stories,
          {
            type: "video",
            id: "aaaaa" + id,
            userName: userName,
            userImage: userAvatar,
            postLocation: "VLN",
            postDate: timeOfPost.toISOString(),
            postVideo: inputValue,
            likes: 0,
            comments: [],
          },
        ]);
      }
    });
    onItemRestart();
    setModalOpen(false);
  };

  //On news feed reaciton click
  const onReactionClick = (i) => {
    let storiesArr = [...stories];
    if (!storiesArr[i].reaction || !("reaction" in storiesArr[i])) {
      storiesArr[i].reaction = true;
      if (storiesArr[i].type === "birthday") {
        storiesArr[i].wishes += 1;
      } else {
        storiesArr[i].likes += 1;
      }
    } else {
      storiesArr[i].reaction = false;
      if (storiesArr[i].type === "birthday") {
        storiesArr[i].wishes -= 1;
      } else {
        storiesArr[i].likes -= 1;
      }
    }
    setStories(storiesArr);
  };

  const modalClose = () => {
    onItemRestart();
    setModalOpen(false);
  };
  //comment Submit handler
  const submitCommentHandler = (i) => () => {
    const postDate = new Date();
    let storiesArr = [...stories];
    storiesArr[i].comments = [
      ...storiesArr[i].comments,
      {
        userName: userName,
        comment: commentRef.current[i],
        date: JSON.stringify(postDate),
      },
    ];
    setStories(storiesArr);
    commentRef.current[i] = "";
    isCommentEmptyCheck(i);
  };

  const onCommentChange = (i) => (e) => {
    commentRef.current[i] = e.target.value;
  };

  const isCommentEmptyCheck = (i) => {
    if (commentRef.current[i].length > 0) {
      setCommentEmptyState(false);
    } else {
      setCommentEmptyState(true);
    }
  };
  const handleCommentBlur = (i) => () => {
    isCommentEmptyCheck(i);
  };

  //sort posts by date
  stories.sort(function (a, b) {
    let keyA = new Date(a.postDate),
      keyB = new Date(b.postDate);
    if (keyA > keyB) return -1;
    if (keyA < keyB) return 1;
    return 0;
  });

  useEffect(() => {
    if (commentRef.current.length !== stories.length) {
      commentRef.current.push(
        ...new Array(stories.length - commentRef.current.length).fill("")
      );
    }
  }, [stories.length]);

  return (
    <>
      <div className="newsFeed__heading">
        <h2 className="dashboard__heading">News and Stories</h2>
        <Button
          className="button button--enabled newsFeed__modal-button"
          handleClick={() => setModalOpen(true)}
        >
          Add new Post
        </Button>
      </div>
      <section className="newsFeed">
        <Modal open={modalOpen} modifierClassName="story" onClose={modalClose}>
          <NewPost
            inputValue={inputValue}
            handleCancelClick={() => setModalOpen(false)}
            handleSubmitClick={addPost}
            buttonState={buttonState}
            onInputChange={(e) => onModalInputChange(e)}
            onItemClick={(i) => onItemClick(i)}
            onInputCancelClick={onModalInputCancelClick}
            modalCommentRef={modalCommentRef.current}
            modalInputOnChange={(e) => modalInputOnChange(e)}
            isModalEmpty={modalTextInputEmpty}
          />
        </Modal>
        <MasonryGrid>
          {stories.map((story, index) => {
            if (story.type === "birthday") {
              return (
                <BirthdayCard
                  key={story.id}
                  data={story}
                  avatar={userAvatar}
                  userName={userName}
                  type={story.type}
                  likes={story.wishes}
                  reaction={story.reaction}
                  onReactionClick={() => onReactionClick(index)}
                  commentsCount={story.comments.length}
                  commentsList={story.comments}
                  submitHandler={submitCommentHandler(index)}
                  commentField={commentRef.current[index]}
                  handleValueChange={onCommentChange(index)}
                  handleBlur={handleCommentBlur(index)}
                  isCommentEmpty={isCommentEmpty}
                />
              );
            } else {
              return (
                <ContentCard
                  key={story.id}
                  data={story}
                  avatar={userAvatar}
                  userName={userName}
                  type={story.type}
                  likes={story.likes}
                  reaction={story.reaction}
                  onReactionClick={() => onReactionClick(index)}
                  commentsCount={story.comments.length}
                  commentsList={story.comments}
                  submitHandler={submitCommentHandler(index)}
                  commentField={commentRef.current[index]}
                  handleValueChange={onCommentChange(index)}
                  handleBlur={handleCommentBlur(index)}
                  isCommentEmpty={isCommentEmpty}
                />
              );
            }
          })}
        </MasonryGrid>
      </section>
    </>
  );
};

export default NewsFeed;
