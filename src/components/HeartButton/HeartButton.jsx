import React, { useState } from "react";
import SVGIcon from "components/SVGIcon/SVGIcon";
import "./heart-button.scss";

export const HeartButton = () => {
  const [reactionCountState, setReactionCountState] = useState({
    reacted: false,
  });

  const reactionIconSelect = () => {
    if (reactionCountState.reacted) {
      return "heartBtnColored";
    } else {
      return "heartBtn";
    }
  };

  const onReactionClick = () => {
    if (reactionCountState.reacted) {
      setReactionCountState({
        reacted: false,
      });
    } else {
      setReactionCountState({
        reacted: true,
      });
    }
  };

  return (
    <button className="heart-button" onClick={onReactionClick}>
      <SVGIcon name={reactionIconSelect()} className="heart-button__icon" />
    </button>
  );
};
