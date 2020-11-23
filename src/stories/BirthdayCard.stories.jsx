import React from "react";
import Divider from "../components/Divider/Divider";
import Card from "../components/Card/Card";
import BirthdayCard from "../components/NewsFeedCard/BirthdayFeed/BirthdayCard";
import UsersReactions from "../components/NewsFeedCard/UsersReactions/UsersReactions";
import fakeData from "../../db.json";

export default {
  title: "Components / BirthdayCardFeed",
};

export const BirthdayCardFeed = () => {
  return fakeData.stories.map((data) => {
    if (data.type == "birthday") {
      return (
        <Card>
          <BirthdayCard data={data} />
          <Divider />
          <UsersReactions data={data} />
        </Card>
      );
    }
  });
};
