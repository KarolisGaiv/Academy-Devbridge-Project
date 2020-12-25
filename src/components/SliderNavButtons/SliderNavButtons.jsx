import React, { useState } from "react";
import PropTypes from "prop-types";
import "./slider-nav-buttons.scss";
import SVGIcon from "components/SVGIcon/SVGIcon";

const SliderNavButtons = ({ leftClicked, rightClicked }) => {
  const [leftState, setColorLeft] = useState("sliderNavLeft");
  const [rightState, setColorRight] = useState("sliderNavRight");

  const leftButtonPressed = (color, leftClicked) => {
    setColorLeft(color);
    leftClicked();
  };
  const rightButtonPressed = (color, rightClicked) => {
    setColorRight(color);
    rightClicked();
  };
  return (
    <div className="buttons-wrapper">
      <button
        onMouseEnter={() => setColorLeft("sliderNavLeftHover")}
        onMouseLeave={() => setColorLeft("sliderNavLeft")}
        onFocus={() => setColorLeft("sliderNavLeftHover")}
        onBlur={() => setColorLeft("sliderNavLeft")}
        onClick={() => leftButtonPressed("sliderNavLeftActive", leftClicked)}
        onMouseDown={() =>
          leftButtonPressed("sliderNavLeftActive", leftClicked)
        }
      >
        <SVGIcon name={leftState} />
      </button>
      <button
        onClick={() => rightButtonPressed("sliderNavRightActive", rightClicked)}
        onMouseDown={() =>
          rightButtonPressed("sliderNavRightActive", rightClicked)
        }
        onMouseEnter={() => setColorRight("sliderNavRightHover")}
        onMouseLeave={() => setColorRight("sliderNavRight")}
        onFocus={() => setColorRight("sliderNavRightHover")}
        onBlur={() => setColorRight("sliderNavRight")}
      >
        <SVGIcon name={rightState} />
      </button>
    </div>
  );
};

export default SliderNavButtons;

SliderNavButtons.propTypes = {
  leftClicked: PropTypes.func,
  rightClicked: PropTypes.func,
  typeName: PropTypes.string,
  className: PropTypes.string,
};
