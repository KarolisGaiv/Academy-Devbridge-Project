import React, { useState } from "react";
import propTypes from "prop-types";
import UserAvatar from "../UserAvatar/UserAvatar";

import "./add-comment.scss";

const AddComment = (props) => {
  return (
    <div className="comment-add">
      <UserAvatar
        className="comment-add__userAvatar"
        size={24}
        imageSrc={props.avatar}
      />
      <form className="comment-add__form">
        <div className="comment-add__textField" contentEditable="true"></div>
        <input
          className="comment-add__submitButton"
          type="button"
          value="post"
          onClick={() => console.log(spanText)}
          autoFocus
        />
      </form>
    </div>
  );
};

export default AddComment;
