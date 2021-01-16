import React from "react";
import PropTypes from "prop-types";
import "../stories-content.scss";

const PhotoContent = (props) => {
  return (
    <div className="post__content">
      <div className="post__image-wrapper">
        <img
          className="post__image"
          src={props.data.postImage}
          alt="post feed"
        />
      </div>
    </div>
  );
};

export default PhotoContent;

PhotoContent.propTypes = {
  data: PropTypes.object,
};
