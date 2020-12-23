import React from "react";
import "./information-card.scss";
import SVGIcon from "../../SVGIcon/SVGIcon";
import PropTypes from "prop-types";

const InformationCard = ({ styleName, icon, title, description }) => {
  return (
    <div className={`information-card information-card--${styleName}`}>
      <div className="information-card__icon">
        <SVGIcon name={icon} />
      </div>
      <div className="information-card__text">
        <div className="information-card__title"> {title} </div>
        <div className="information-card__description"> {description} </div>
      </div>
    </div>
  );
};

export default InformationCard;

InformationCard.propTypes = {
  styleName: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};
