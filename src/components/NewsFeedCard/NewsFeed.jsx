import React from "react";
import BirthdayCard from "./BirthdayFeed/BirthdayCard";
import fakeData from "../../db.json";

const NewsFeed = () => {
  //VIDEO/POST stories can be added to IF statemenet
  return (
    <section className="NewsFeed">
      {fakeData.stories.map((data, index) => {
        if (data.type == "birthday") {
          return (
            <BirthdayCard
              key={index}
              data={data}
              avatar={fakeData.userData.userImage}
              userName={fakeData.userData.userName}
            />
          );
          // When created change this to an appropriate component
        } else if (data.type == "video") {
          return (
            <BirthdayCard
              key={index}
              data={data}
              avatar={fakeData.userData.userImage}
              userName={fakeData.userData.userName}
            />
          );
          // When created change this to an appropriate component
        } else if (data.type == "post") {
          return (
            <BirthdayCard
              key={index}
              data={data}
              avatar={fakeData.userData.userImage}
              userName={fakeData.userData.userName}
            />
          );
        }
      })}
    </section>
  );
};

export default NewsFeed;
