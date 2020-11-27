import React, { useState } from "react";
import PropTypes from "prop-types";

import "./comments.scss";

const Comments = (props) => {

  return(
    <div className="comment-section">
      {props.data.comments.map((comment, index) => (
        <div key={index} className="comment clearfix">
          <div className="comment__user-name">{comment.userName}</div>
          <div className="comment__text">{comment.comment}</div>
        </div>
      ))}
    </div>
  );
}

export default Comments;

