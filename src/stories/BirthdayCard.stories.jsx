import React, { useState } from "react";
import Divider from "../components/Divider/Divider";
import Card from "../components/Card/Card";
import BirthdayCard from "../components/NewsFeedCard/BirthdayFeed/BirthdayCard";
import UsersReactions from "../components/NewsFeedCard/UsersReactions/UsersReactions";
import Comments from "../components/NewsFeedCard/comments";
import AddComment from "../components/NewsFeedCard/AddComment";
import fakeData from "../db.json";

export default {
  title: "Components / BirthdayCardFeed",
};

export const BirthdayCardFeed = () => {

  const [comments, setComments] = useState({
    
  });



  return fakeData.stories.map((data, index) => {
    if (data.type == "birthday") {
      return (
        <Card key={index}>
          <BirthdayCard data={data} />
          <Divider />
          <UsersReactions data={data} />
          <Divider />
          <Comments data={data} />
          <Divider />
          <AddComment avatar={fakeData.userData.userImage} />
        </Card>
      );
    }
  });
};
