import React from "react";
import PropTypes from "prop-types";
import SVGIcon from "../../SVGIcon/SVGIcon";

import "./users-reactions.scss";

const UsersReactions = (props) => {
  const reactionIconSelect = (data) => {
    if (data.type === "birthday") {
      return "presentBtn";
    } else if (data.type === "post" || data.type === "video") {
      return "heartBtn";
    }
  };

  const reactionCount = (data) => {
    if (data.type === "birthday") {
      return data.wishes;
    } else if (data.type === "post" || data.type === "video") {
      return data.likes;
    }
  };

  return (
    <div className="user-reactions">
      <div className="user-reactions__reaction">
        <SVGIcon
          name={reactionIconSelect(props.data)}
          className="user-reactions__reaction-icon"
        />
        <p className="user-reactions__reaction-count">
          {reactionCount(props.data)}
        </p>
      </div>
      <div className="user-reactions__comment">
        <SVGIcon name="commentBtn" className="user-reactions__comment-icon" />
        <p className="user-reactions__comment-count">
          {props.data.comments.length}
        </p>
      </div>
    </div>
  );
};

export default UsersReactions;

UsersReactions.propTypes = {
  data: PropTypes.array,
};
