import React from "react";
import BirthdayCard from "./Stories/Birthday/BirthdayCard";
import MasonryGrid from "../MasonryGrid/MasonryGrid";
import VideoCard from "./Stories/Video/VideoCard";
import PhotoCard from "./Stories/Photo/PhotoCard";
import PostCard from "./Stories/Post/PostCard";
import fakeData from "../../db.json";

const NewsFeed = () => {
  const userAvatar = fakeData.userData.userImage;
  const userName = fakeData.userData.userName;

  //sort posts by date
  fakeData.stories.sort(function (a, b) {
    let keyA = new Date(a.postDate),
      keyB = new Date(b.postDate);

    if (keyA > keyB) return -1;
    if (keyA < keyB) return 1;
    return 0;
  });

  return (
    <section className="newsFeed">
      <MasonryGrid>
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
          } else if (data.type === "photo") {
            return (
              <PhotoCard
                key={index}
                data={data}
                avatar={userAvatar}
                userName={userName}
              />
            );
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
      </MasonryGrid>
    </section>
  );
};

export default NewsFeed;
