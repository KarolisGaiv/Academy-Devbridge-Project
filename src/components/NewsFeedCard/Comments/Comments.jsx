import React from "react";
import PropTypes from "prop-types";

import "./comments.scss";

const Comments = (props) => {
  return (
    <div className="comment clearfix">
      <div className="comment__user-name">{props.username}</div>
      <div className="comment__text">{props.comment}</div>
    </div>
  );
};

export default Comments;

Comments.propTypes = {
  username: PropTypes.string,
  comment: PropTypes.string,
};
