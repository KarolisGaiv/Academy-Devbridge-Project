import React from "react";
import { ReactComponent as Thunderstorm } from "../../../../assets/weather/thunderstorm.svg";
import { ReactComponent as Sun } from "../../../../assets/weather/sun.svg";
import { ReactComponent as Snow } from "../../../../assets/weather/snow.svg";
import { ReactComponent as Rain } from "../../../../assets/weather/rain.svg";
import { ReactComponent as Cloud } from "../../../../assets/weather/cloud.svg";
import propTypes from "prop-types";

const SVGIcon = (props) => {
  switch (props.type) {
    case "Thunderstorm":
      return <Thunderstorm />;
    case "Sunny":
      return <Sun />;
    case "Snow":
      return <Snow />;
    case "Light shower":
      return <Rain />;
    case "Cloudy":
      return <Cloud />;
    default:
      return "error";
  }
};

export default SVGIcon;

SVGIcon.propTypes = {
  type: propTypes.string,
};
