import React, { useState } from "react";
import PropTypes from "prop-types";
import SVGIcon from "../../SVGIcon/SVGIcon";

import "./users-reactions.scss";

const UsersReactions = (props) => {
  //Determine which reaction data to take
  const reactionCountByType = (data) => {
    if (data.type === "birthday") {
      return data.wishes;
    } else if (
      data.type === "post" ||
      data.type === "video" ||
      data.type === "photo"
    ) {
      return data.likes;
    }
  };

  const [reactionCountState, setReactionCountState] = useState({
    reactionCount: reactionCountByType(props.data),
    reacted: false,
  });

  //Determine wether the post was reacted to and select icon
  const reactionIconSelect = (data) => {
    if (reactionCountState.reacted) {
      if (data.type === "birthday") {
        return "presentBtnColored";
      } else if (
        data.type === "post" ||
        data.type === "video" ||
        data.type === "photo"
      ) {
        return "heartBtnColored";
      }
    } else {
      if (data.type === "birthday") {
        return "presentBtn";
      } else if (
        data.type === "post" ||
        data.type === "video" ||
        data.type === "photo"
      ) {
        return "heartBtn";
      }
    }
  };

  //if reaction was clicked, update reactionCount
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
          className="user-reactions__button"
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
        <button className="user-reactions__button disabled" type="submit">
          <SVGIcon
            name="commentBtn"
            className="user-reactions__comment-icon svg-icon"
          />
        </button>
        <p className="user-reactions__comment-count">{props.commentCount}</p>
      </div>
    </div>
  );
};

export default UsersReactions;

UsersReactions.propTypes = {
  data: PropTypes.object,
  commentCount: PropTypes.number,
};
