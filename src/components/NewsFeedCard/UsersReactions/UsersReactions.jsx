import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import SVGIcon from "../../SVGIcon/SVGIcon";

import "./users-reactions.scss";

const UsersReactions = (props) => {
  const reactionCountByType = (data) => {
    if (data.type === "birthday") {
      return data.wishes;
    } else if (data.type === "post" || data.type === "video") {
      return data.likes;
    }
  };

  const [reactionCountState, setReactionCountState] = useState({
    reactionCount: reactionCountByType(props.data),
    reacted: false,
  });

  const reactionIconSelect = (data) => {
    if (reactionCountState.reacted) {
      if (data.type === "birthday") {
        return "presentBtnColored";
      } else if (data.type === "post" || data.type === "video") {
        return "heartBtnColored";
      }
    } else {
      if (data.type === "birthday") {
        return "presentBtn";
      } else if (data.type === "post" || data.type === "video") {
        return "heartBtn";
      }
    }
  };

  const onReactionClick = () => {
    if (reactionCountState.reacted) {
      setReactionCountState({
        reactionCount: reactionCountState.reactionCount - 1,
        reacted: false,
      });
    } else {
      setReactionCountState({
        reactionCount: reactionCountState.reactionCount + 1,
        reacted: true,
      });
    }
  };

  return (
    <div className="user-reactions">
      <div className="user-reactions__reaction">
        <button
          class="user-reactions__button"
          type="submit"
          onClick={onReactionClick}
        >
          <SVGIcon
            name={reactionIconSelect(props.data)}
            className="user-reactions__reaction-icon svg-icon"
          />
        </button>
        <p className="user-reactions__reaction-count">
          {reactionCountState.reactionCount}
        </p>
      </div>
      <div className="user-reactions__comment">
        <button
          class="user-reactions__button disabled"
          type="submit"
        >
          <SVGIcon name="commentBtn" className="user-reactions__comment-icon" />
        </button>
        <p className="user-reactions__comment-count">
          {props.data.comments.length}
        </p>
      </div>
    </div>
  );
};

export default UsersReactions;

UsersReactions.PropTypes = {
  data: PropTypes.array,
};
