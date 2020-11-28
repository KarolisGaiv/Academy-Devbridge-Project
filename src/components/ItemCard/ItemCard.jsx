import React from "react";
import "./item-card.scss";
import PropTypes from "prop-types";
import SVGIcon from "../SVGIcon/SVGIcon";

export const ResCard = (props) => {
  return (
    <div className="card-wrapper">
      <div className="card-wrapper__info">
        <span className="card-wrapper__name">{props.name}</span>
        <span className="card-wrapper__details">2 RESERVED</span>
      </div>
      <div className="card-wrapper__icon">
        <SVGIcon name={props.icon} />
      </div>
    </div>
  );
};

export default ResCard;

ResCard.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.string,
};
