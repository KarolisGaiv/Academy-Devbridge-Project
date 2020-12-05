import React from "react";
import UserAvatar from "../components/UserAvatar/UserAvatar";
import TimeBetween from "../components/NewsFeedCard/TimeBetween";
import SVGIcon from "../components/SVGIcon/SVGIcon";
//data will come through components
import fakeData from "../db.json";
import "../components/NewsFeedCard/PostHeader/post-header.scss";

export default {
  title: "Components / PostCard",
};

export const PostHeader = () => {
  const timeNow = new Date().getTime();

  return (
    <div className="post__header">
      {/* /index picked only for story */}
      <div className="post__avatar-wrapper">
        <UserAvatar size={24} imageSrc={fakeData.stories[1].userImage} />
      </div>
      <span className="post__username">{fakeData.stories[1].userName}</span>
      <span className="post__location">{fakeData.stories[1].postLocation}</span>
      <span className="post__date">
        {TimeBetween(timeNow, fakeData.stories[1].postDate)}
      </span>
    </div>
  );
};

export const PostContent = () => {
  return (
    <div className="post__content">
      <img
        className="post__image"
        src={fakeData.stories[1].postImage}
        alt="post feed"
      />
    </div>
  );
};

export const VideoContent = () => {
  return (
    <div className="post__content">
      <img
        className="post__image"
        src={fakeData.stories[2].postVideo}
        alt="video feed"
      />
      <button className="post__video-play-button">
        <SVGIcon name="play" className="post__svg" />
      </button>
    </div>
  );
};
