import React from "react";
import PropTypes from "prop-types";
import UserAvatar from "../../UserAvatar/UserAvatar";
import SVGIcon from "../../SVGIcon/SVGIcon";
import FormatDate from "../FormatDate";

import "./birthday-card-section.scss";

const BirthdayCardSection = (props) => {
  return (
    <div className="birthday">
      <div className="birthday__profile">
        <UserAvatar size={96} imageSrc={props.data.userImage} />
      </div>
      <div className="birthday__text">
        <p className="birthday__user">{props.data.userName}</p>
        <p className="birthday__date">
          Celebrated a birthday on{" "}
          <span className="date">{FormatDate(props.data.birthdayDate)}</span>
        </p>
        <p className="birthday__wish">Send a wish!</p>
      </div>
      <SVGIcon name="confetti" className="birthday__svg birthday__confetti" />
      <SVGIcon
        name="openPresent"
        className="birthday__svg birthday__open-present"
      />
      {[...Array(4)].map((value, index) => (
        <div key={index}>
          <SVGIcon
            name="confettiCircle"
            className={`birthday__svg birthday__confetti-circle svg-circle--position-${
              index + 1
            }`}
          />
          <SVGIcon
            name="confettiStar"
            className={`birthday__svg birthday__confetti-star svg-star--position-${
              index + 1
            }`}
          />
        </div>
      ))}
    </div>
  );
};

export default BirthdayCardSection;

BirthdayCardSection.propTypes = {
  data: PropTypes.object,
};
