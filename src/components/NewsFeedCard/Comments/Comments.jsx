import React from "react";
import PropTypes from "prop-types";

import "./comments.scss";

const Comments = (props) => {
  return (
    <div className="comment">
      <span className="comment__user-name">{props.username}</span>
      <span className="comment__text">{props.comment}</span>
    </div>
  );
};

export default Comments;

Comments.propTypes = {
  username: PropTypes.string,
  comment: PropTypes.string,
};
