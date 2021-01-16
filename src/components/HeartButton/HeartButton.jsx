import React, { useState } from "react";
import SVGIcon from "components/SVGIcon/SVGIcon";
import "./heart-button.scss";

export const HeartButton = () => {
  const [reactionCountState, setReactionCountState] = useState(false);

  const onReactionClick = () => {
    setReactionCountState(!reactionCountState);
  };

  return (
    <button className="heart-button" onClick={onReactionClick}>
      <SVGIcon
        name={reactionCountState ? "heartBtnColored" : "heartBtn"}
        className="heart-button__icon"
      />
    </button>
  );
};
