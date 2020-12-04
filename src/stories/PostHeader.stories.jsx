import React from "react";
import UserAvatar from "../components/UserAvatar/UserAvatar";
import fakeData from "../db.json";
import "../components/NewsFeedCard/PostHeader/post-header.scss";

export default {
  title: "Components / PostCard",
};

export const PostHeader = () => {
  const timeNow = new Date().getTime();

  const timeBetween = (now, post) => {
    const oneDay = 1000 * 60 * 60 * 24;
    const oneHour = 1000 * 60 * 60;
    const oneMinute = 1000 * 60;
    const postTime = new Date(post).getTime();
    const difference = now - postTime;
    const daysBetween = Math.round(difference / oneDay);
    const hoursBetween = Math.round(difference / oneHour);
    const minutesBetween = Math.round(difference / oneMinute);
    if (daysBetween > 1) {
      return daysBetween + "d";
    } else if (hoursBetween > 1) {
      return hoursBetween + "h";
    } else if (minutesBetween > 1) {
      return minutesBetween + "min";
    }
  };

  return (
    <div className="post__header">
      {/* /index picked only for story */}
      <div className="post__avatar-wrapper">
        <UserAvatar size={24} imageSrc={fakeData.stories[1].userImage} />
      </div>
      <span className="post__username">{fakeData.stories[1].userName}</span>
      <span className="post__location">{fakeData.stories[1].postLocation}</span>
      <span className="post__date">
        {timeBetween(timeNow, fakeData.stories[1].postDate)}
      </span>
    </div>
  );
};
