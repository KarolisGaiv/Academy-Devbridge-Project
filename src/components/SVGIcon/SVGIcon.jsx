import React from "react";
import { ReactComponent as BookmarkIcon } from "../../assets/bookmarkIcon.svg";
import { ReactComponent as ChevronRightIcon } from "../../assets/chevronRightIcon.svg";
import { ReactComponent as CompassIcon } from "../../assets/compassIcon.svg";
import { ReactComponent as HeaderLogo } from "../../assets/headerLogo.svg";
import { ReactComponent as HeaderFullLogo } from "../../assets/headerFullLogo.svg";
import { ReactComponent as HomeIcon } from "../../assets/homeIcon.svg";
import { ReactComponent as Confetti } from "../../assets/confetti.svg";
import { ReactComponent as ConfettiCircle } from "../../assets/confettiCircle.svg";
import { ReactComponent as ConfettiStar } from "../../assets/confettiStar.svg";
import { ReactComponent as OpenPresent } from "../../assets/openPresent.svg";
import { ReactComponent as PresentBtn } from "../../assets/presentBtn.svg";
import { ReactComponent as PresentBtnColored } from "../../assets/presentBtnColored.svg";
import { ReactComponent as CommentBtn } from "../../assets/commentBtn.svg";
import { ReactComponent as HeartBtnColored } from "../../assets/heartBtnColored.svg";
import { ReactComponent as HeartBtn } from "../../assets/heartBtn.svg";
import { ReactComponent as EmptyStar } from "../../assets/emptyStar.svg";
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
    case "confetti":
      return <Confetti className={props.className} />;
    case "confettiCircle":
      return <ConfettiCircle className={props.className} />;
    case "confettiStar":
      return <ConfettiStar className={props.className} />;
    case "openPresent":
      return <OpenPresent className={props.className} />;
    case "presentBtn":
      return <PresentBtn className={props.className} />;
    case "presentBtnColored":
      return <PresentBtnColored className={props.className} />;
    case "commentBtn":
      return <CommentBtn className={props.className} />;
    case "heartBtnColored":
      return <HeartBtnColored className={props.className} />;
    case "heartBtn":
      return <HeartBtn className={props.className} />;
    case "emptyStar":
      return <EmptyStar className={props.className} />;
    default:
      return "error";
  }
};

export default SVGIcon;

SVGIcon.propTypes = {
  name: propTypes.string,
  className: propTypes.string,
};
