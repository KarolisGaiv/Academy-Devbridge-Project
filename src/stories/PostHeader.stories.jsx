import React from "react";
import UserAvatar from "../components/UserAvatar/UserAvatar";
import TimeBetween from "../components/NewsFeedCard/TimeBetween";
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
