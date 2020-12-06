import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Divider from "../../../Divider/Divider";
import { CardContainer } from "../../../CardContainer/CardContainer";
import BirthdayContent from "./BirthdayContent";
import UsersReactions from "../../UsersReactions/UsersReactions";
import Comments from "../../Comments/Comments";
import AddComment from "../../Comments/AddComment";

const BirthdayCard = (props) => {
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
    setComments({
      comments: [
        ...commentsList.comments,
        {
          userName: props.userName,
          comment: commentField.current,
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

  //Update comment count when posted
  useEffect(() => {
    setCommentsCountState(commentsList.comments.length);
  }, [commentsList.comments.length]);

  return (
    <div className="newsFeed__card birthday-card">
      <CardContainer styleName="card-container--shadow">
        <BirthdayContent data={props.data} />
        <Divider />
        <UsersReactions data={props.data} commentCount={commentsCount} />
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

BirthdayCard.displayName = "BirthdayCard";

export default BirthdayCard;

BirthdayCard.propTypes = {
  data: PropTypes.object,
  userName: PropTypes.string,
  avatar: PropTypes.string,
};
