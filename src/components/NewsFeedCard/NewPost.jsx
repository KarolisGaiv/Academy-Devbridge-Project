import React, { useEffect, useState } from "react";
import propTypes from "prop-types";
import "./new-post.scss";

const NewPost = () => {
  useState();
  const postTypes = [
    { name: "text", selected: true },
    { name: "photo", selected: false },
    { name: "video", selected: false },
  ];
  return (
    <div className="new-post">
      <h2 className="new-post__headline">Post a new story</h2>
      <div className="new-post__post-options">
        {postTypes.map((type, index) => {
          return (
            <div
              key={index}
              className={`radio-button__wrapper ${
                type.selected ? `radio-button__wrapper--selected` : null
              }`}
            >
              <button onClick={() => {}} className={`radio-button `}>
                {type.name}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewPost;
