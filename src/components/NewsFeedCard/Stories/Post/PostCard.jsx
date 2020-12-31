import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import PostContent from "./PostContent";
import StoriesHeader from "../../StoriesHeader/StoriesHeader";
import UserReactions from "../../UsersReactions/UsersReactions";
import Comments from "../../Comments/Comments";
import AddComment from "../../Comments/AddComment";
import Divider from "../../../Divider/Divider";
import { CardContainer } from "../../../CardContainer/CardContainer";

const PostCard = (props) => {
  const [commentsList, setComments] = useState({
    comments: props.data.comments,
  });
  const [isCommentEmpty, setCommentEmptyState] = useState(true);
  const [commentsCount, setCommentsCountState] = useState(
    commentsList.comments.length
  );
  const commentField = useRef("");

  //update comment field value
  const handleChange = (e) => {
    commentField.current = e.target.value;
  };

  //update comments array when comment submitted
  //reset the value of input field
  const submitHandler = () => {
    const postDate = new Date();
    setComments({
      comments: [
        ...commentsList.comments,
        {
          userName: props.userName,
          comment: commentField.current,
          date: postDate,
        },
      ],
    });
    commentField.current = "";
    setCommentEmptyState(true);
  };

  //check if comment field is not empty.
  //IF NOT empty, allow to post, set
  //ELSE do not allow to post
  const isEmptyCheck = () => {
    if (commentField.current.length > 0) {
      setCommentEmptyState(false);
    } else {
      setCommentEmptyState(true);
    }
  };

  //check if empty when input field is not in focus
  const handleBlur = () => {
    isEmptyCheck();
  };

  //sort comments by date
  commentsList.comments.sort(function (a, b) {
    let keyA = new Date(a.date),
      keyB = new Date(b.date);

    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;
    return 0;
  });

  //Update comment count when posted
  useEffect(() => {
    setCommentsCountState(commentsList.comments.length);
  }, [commentsList]);

  return (
    <div className="newsFeed__card post__card">
      <CardContainer styleName="card-container--shadow">
        <StoriesHeader data={props.data} />
        <PostContent data={props.data} />
        <UserReactions data={props.data} commentCount={commentsCount} />
        <Divider />
        <div className="comment-section">
          {commentsList.comments.map((data, index) => (
            <Comments
              key={index}
              username={data.userName}
              comment={data.comment}
            />
          ))}
        </div>
        <Divider />
        <AddComment
          avatar={props.avatar}
          submit={submitHandler}
          isEmpty={isCommentEmpty}
          commentText={commentField.current}
          onBlur={handleBlur}
          onChange={handleChange}
        />
      </CardContainer>
    </div>
  );
};

export default PostCard;

PostCard.propTypes = {
  data: PropTypes.object,
  userName: PropTypes.string,
  avatar: PropTypes.string,
};
