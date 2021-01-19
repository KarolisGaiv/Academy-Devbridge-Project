import React, { useState, useRef, useEffect } from "react";
import BirthdayCard from "./Stories/Content/Birthday/BirthdayCard";
import MasonryGrid from "../MasonryGrid/MasonryGrid";
import ContentCard from "./Stories/Content/ContentCard";
import fakeData from "../../db.json";

const NewsFeed = () => {
  const userAvatar = fakeData.userData.userImage;
  const userName = fakeData.userData.userName;
  const [stories, setStories] = useState(fakeData.stories);
  const [commentValue, setCommentValue] = useState([]);
  const inputRef = useRef(new Array(stories.length).fill(""));
  const [isCommentEmpty, setCommentEmptyState] = useState(false);

  //to fake unique id
  const [id, setId] = useState(0);

  //add new post
  const addPost = () => {
    const timeOfPost = new Date();
    setId(id + 1);
    setStories([
      ...stories,
      {
        type: "post",
        id: "aaaaa" + id,
        userName: userName,
        userImage: userAvatar,
        postLocation: "LDN",
        postDate: timeOfPost.toISOString(),
        postText: id,
        likes: 0,
        comments: [],
      },
    ]);
  };

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
        storiesArr[i].wishes += 1;
      } else {
        storiesArr[i].likes += 1;
      }
    }
    setStories(storiesArr);
  };

  const submitHandler = (i) => () => {
    setCommentValue((prev) => [
      ...Object.assign(prev, { [i]: inputRef.current[i] }),
    ]);
    const postDate = new Date();
    let storiesArr = [...stories];
    storiesArr[i].comments = [
      ...storiesArr[i].comments,
      {
        userName: userName,
        comment: inputRef.current[i],
        date: JSON.stringify(postDate),
      },
    ];
    setStories(storiesArr);
    inputRef.current[i] = "";
  };

  const onChange = (i) => (e) => {
    inputRef.current[i] = e.target.value;
  };

  const isEmptyCheck = (i) => {
    if (inputRef.current[i].length > 0) {
      setCommentEmptyState(false);
    } else {
      setCommentEmptyState(true);
    }
  };
  const handleBlur = (i) => () => {
    isEmptyCheck(i);
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
    if (inputRef.current.length !== stories.length) {
      inputRef.current.push(
        ...new Array(stories.length - inputRef.current.length).fill("")
      );
    }
  }, [stories.length]);

  return (
    <section className="newsFeed">
      <button onClick={addPost}>Click</button>
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
                submitHandler={submitHandler(index)}
                commentField={inputRef.current[index]}
                handleValueChange={onChange(index)}
                handleBlur={handleBlur(index)}
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
                submitHandler={submitHandler(index)}
                commentField={inputRef.current[index]}
                handleValueChange={onChange(index)}
                handleBlur={handleBlur(index)}
                isCommentEmpty={isCommentEmpty}
              />
            );
          }
        })}
      </MasonryGrid>
    </section>
  );
};

export default NewsFeed;
