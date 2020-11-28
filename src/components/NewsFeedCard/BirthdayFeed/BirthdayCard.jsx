import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Divider from "../../Divider/Divider";
import Card from "../../Card/Card";
import BirthdayCardSection from "../BirthdayFeed/BirthdayCardSection";
import UsersReactions from "../UsersReactions/UsersReactions";
import Comments from "../Comments/Comments";
import AddComment from "../Comments/AddComment";

import "../news-feed.scss";

export const BirthdayCard = (props) => {
  //get the states for:
  //commments array in a post,
  //comment field,
  //comment field emptiness,
  //and comment counts
  const [commentsList, setComments] = useState({
    comments: props.data.comments,
  });
  const [commentField, setCommentField] = useState("");
  const [isCommentEmpty, setCommentEmptyState] = useState(true);
  const [commentCount, setCommentCountState] = useState(
    props.data.comments.length
  );

  //update comments array when comment submitted
  //reset the value of input field
  const submitHandler = () => {
    setComments({
      comments: [
        ...commentsList.comments,
        {
          userName: props.userName,
          comment: commentField,
        },
      ],
    });
    document
      .querySelectorAll(".comment-add__textField")
      .forEach((myClassElement) => (myClassElement.textContent = ""));
  };

  //check if comment field is not empty.
  //IF NOT empty, allow to post, set
  //ELSE do not allow to post
  const isEmptyCheck = () => {
    document
      .querySelectorAll(".comment-add__textField")
      .forEach((myClassElement) => {
        if (myClassElement.textContent.length) {
          setCommentEmptyState(false);
          setCommentField(myClassElement.textContent);
        } else {
          setCommentEmptyState(true);
        }
      });
  };

  //Look for changes in text field
  //Update comment count when posted
  useEffect(() => {
    document
      .querySelectorAll(".comment-add__textField")
      .forEach((myClassElement) =>
        myClassElement.addEventListener(
          "input",
          isEmptyCheck(myClassElement),
          false
        )
      );
    setCommentCountState(commentsList.comments.length);
  }, [commentsList.comments.length]);

  return (
    <div className="newsFeed__card">
      <Card>
        <BirthdayCardSection data={props.data} />
        <Divider />
        <UsersReactions data={props.data} commentCount={commentCount} />
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
          commentField={commentField}
          isEmpty={isCommentEmpty}
        />
      </Card>
    </div>
  );
};

export default BirthdayCard;

BirthdayCard.propTypes = {
  data: PropTypes.object,
  textFieldIndex: PropTypes.number,
  userName: PropTypes.string,
  avatar: PropTypes.string,
};
