import React from "react";
import ContentEditable from "react-contenteditable";
import PropTypes from "prop-types";
import UserAvatar from "../../UserAvatar/UserAvatar";

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
        <ContentEditable
          className="comment-add__textField"
          html={props.commentText}
          onBlur={props.onBlur}
          onChange={props.onChange}
          disabled={false}
          innerRef={props.commentInput}
        ></ContentEditable>
        <input
          className="comment-add__submitButton"
          type="button"
          value="post"
          onClick={!props.isEmpty ? props.submit : null}
        />
      </form>
    </div>
  );
};

export default AddComment;

AddComment.propTypes = {
  children: PropTypes.object,
  avatar: PropTypes.string,
  isEmpty: PropTypes.bool,
  submit: PropTypes.func,
  commentText: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  commentInput: PropTypes.any,
};
