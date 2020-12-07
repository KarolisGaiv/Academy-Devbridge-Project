import React from "react";
import "./category-card.scss";
import PropTypes from "prop-types";
import SVGIcon from "../SVGIcon/SVGIcon";

export const ResCard = ({
  category,
  totalNumber,
  icon,
  keyword,
  iconStyle,
}) => {
  return (
    <div className="card-wrapper">
      <div className="card-wrapper__info">
        <span className="card-wrapper__name">{category}</span>
        <span className="card-wrapper__details">
          {`${totalNumber} ${keyword}`}
        </span>
      </div>
      <div className={`card-wrapper__icon card-wrapper__icon--${iconStyle}`}>
        <SVGIcon name={icon} />
      </div>
    </div>
  );
};

export default ResCard;

ResCard.propTypes = {
  category: PropTypes.string,
  icon: PropTypes.string,
  totalNumber: PropTypes.number,
  keyword: PropTypes.string,
  iconStyle: PropTypes.string,
};
