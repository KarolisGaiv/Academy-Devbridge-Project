import React from "react";
import Divider from "../Divider/Divider";
import Card from "../Card/Card";
import BirthdayCard from "./BirthdayFeed/BirthdayCard";
import UsersReactions from "./UsersReactions/UsersReactions";
import fakeData from "../../db.json";


export const BirthdayCardFeed = () => {
  return fakeData.stories.map((data) => {
    if (data.type === "birthday") {
      return (
        <Card>
          <BirthdayCard data={data} />
          <Divider />
          <UsersReactions data={data} />
        </Card>
      );
    }
    return;
  });
};


export default BirthdayCardFeed;