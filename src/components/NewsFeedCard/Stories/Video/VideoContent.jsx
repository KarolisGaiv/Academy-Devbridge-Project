import React from "react";
import PropTypes from "prop-types";
import SVGIcon from "../../../SVGIcon/SVGIcon";
import "../stories-content.scss";

const VideoContent = (props) => {
  return (
    <div className="post__content">
      <div className="post__image-wrapper">
        <img
          className="post__image"
          src={props.data.postVideo}
          alt="video feed"
        />
        <button className="post__video-play-button">
          <SVGIcon name="play" className="post__svg" />
        </button>
      </div>
    </div>
  );
};

export default VideoContent;

VideoContent.propTypes = {
  data: PropTypes.object,
};
