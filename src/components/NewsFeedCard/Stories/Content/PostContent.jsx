import React from "react";
import PropTypes from "prop-types";
import "../stories-content.scss";

const PostContent = ({ postText }) => {
  return (
    <div className="post__content">
      <div className="post__text-wrapper">
        <div className="post__text">{postText}</div>
      </div>
    </div>
  );
};

export default PostContent;

PostContent.propTypes = {
  postText: PropTypes.string,
};
