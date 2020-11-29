import React from "react";
import BirthdayCard from "./BirthdayFeed/BirthdayCard";
import fakeData from "../../db.json";

import "./news-feed.scss";

const NewsFeed = () => {
  const userAvatar = fakeData.userData.userImage;
  const userName = fakeData.userData.userName;
  //VIDEO/POST stories can be added to IF statemenet
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
            <BirthdayCard
              key={index}
              data={data}
              avatar={userAvatar}
              userName={userName}
            />
          );
          // When created change this to an appropriate component
        } else if (data.type === "post") {
          return (
            <BirthdayCard
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
