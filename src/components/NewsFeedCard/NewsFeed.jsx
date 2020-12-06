import React from "react";
import BirthdayCard from "./Stories/Birthday/BirthdayCard";
import VideoCard from "./Stories/Video/VideoCard";
import PostCard from "./Stories/Post/PostCard";
import fakeData from "../../db.json";

import "./news-feed.scss";

const NewsFeed = () => {
  const userAvatar = fakeData.userData.userImage;
  const userName = fakeData.userData.userName;
  return (
    <section className="newsFeed">
      {fakeData.stories.map((data, index) => {
        if (data.type === "birthday") {
          return (
            <BirthdayCard
              key={index}
              data={data}
              avatar={userAvatar}
              userName={userName}
            />
          );
          // When created change this to an appropriate component
        } else if (data.type === "video") {
          return (
            <VideoCard
              key={index}
              data={data}
              avatar={userAvatar}
              userName={userName}
            />
          );
          // When created change this to an appropriate component
        } else if (data.type === "post") {
          return (
            <PostCard
              key={index}
              data={data}
              avatar={userAvatar}
              userName={userName}
            />
          );
        } else {
          return null;
        }
      })}
    </section>
  );
};

export default NewsFeed;
