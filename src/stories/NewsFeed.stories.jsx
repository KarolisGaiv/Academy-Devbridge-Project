import React from "react";
import BirthdayCard from "../components/NewsFeedCard/BirthdayFeed/BirthdayCard";
import fakeData from "../db.json";

export default {
  title: "Components / NewsFeed",
};

export const NewsdFeed = () => {
  //VIDEO/POST stories can be added to IF statemenet
  return fakeData.stories.map((data, index) => {
    if (data.type == "birthday") {
      return (
        <BirthdayCard
          key={index}
          data={data}
          avatar={fakeData.userData.userImage}
          userName={fakeData.userData.userName}
        />
      );
    }
  });
};
