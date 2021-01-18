import React, { useEffect, useState } from "react";
import ContentEditable from "react-contenteditable";
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
            <button
              key={index}
              onClick={() => {}}
              className={`new-post__button new-post__button${
                type.selected ? `--selected` : null
              }`}
            >
              {type.name}
            </button>
          );
        })}
      </div>
      <ContentEditable
        className="new-post__textField"
        html={""}
        onBlur={() => {}}
        onChange={() => {}}
        disabled={false}
        innerRef={"a"}
      ></ContentEditable>
    </div>
  );
};

export default NewPost;
