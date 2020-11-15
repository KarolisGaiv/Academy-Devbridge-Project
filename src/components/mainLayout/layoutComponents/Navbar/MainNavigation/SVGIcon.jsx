import React from "react";
import { ReactComponent as BookmarkIcon } from "../../../../../assets/bookmarkIcon.svg";
import { ReactComponent as ChevronRightIcon } from "../../../../../assets/chevronRightIcon.svg";
import { ReactComponent as CompassIcon } from "../../../../../assets/compassIcon.svg";
import { ReactComponent as HeaderLogo } from "../../../../../assets/headerLogo.svg";
import { ReactComponent as HeaderFullLogo } from "../../../../../assets/headerFullLogo.svg";
import { ReactComponent as HomeIcon } from "../../../../../assets/homeIcon.svg";
import propTypes from "prop-types";

const SVGIcon = (props) => {
  switch (props.name) {
    case "home":
      return <HomeIcon className={props.className} />;
    case "bookmark":
      return <BookmarkIcon className={props.className} />;
    case "compass":
      return <CompassIcon className={props.className} />;
    case "chevron-right":
      return <ChevronRightIcon className={props.className} />;
    case "logo":
      return <HeaderLogo className={props.className} />;
    case "fullLogo":
      return <HeaderFullLogo className={props.className} />;
    default:
      return "error";
  }
};

export default SVGIcon;

SVGIcon.propTypes = {
  name: propTypes.string,
  className: propTypes.string,
};
