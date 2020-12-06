import React from "react";
import PropTypes from "prop-types";
import "../stories-content.scss";

const PostContent = (props) => {
  return (
    <div className="post__content">
      <img className="post__image" src={props.data.postImage} alt="post feed" />
    </div>
  );
};

export default PostContent;

PostContent.propTypes = {
  data: PropTypes.object,
};
