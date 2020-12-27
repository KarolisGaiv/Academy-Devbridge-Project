import React from "react";
import sanitizeHtml from "sanitize-html";
import PropTypes from "prop-types";

import "./comments.scss";

const Comments = (props) => {
  const cleanComment = sanitizeHtml(props.comment, {
    allowedTags: ["b", "i", "em", "strong", "br", "div", "p"],
  });
  return (
    <div className="comment">
      <span className="comment__user-name">{props.username}</span>
      <span
        className="comment__text"
        dangerouslySetInnerHTML={{ __html: cleanComment }}
      ></span>
    </div>
  );
};

export default Comments;

Comments.propTypes = {
  username: PropTypes.string,
  comment: PropTypes.string,
};
