import React from "react";
import "./category-card.scss";
import PropTypes from "prop-types";
import SVGIcon from "../SVGIcon/SVGIcon";
import classNames from "classnames";

export const ResCard = ({
  category,
  totalNumber,
  icon,
  keyword,
  iconsOutside,
}) => {
  const iconStyle = classNames("card-wrapper__icon", {
    "card-wrapper__icon--outside": iconsOutside === true,
  });

  return (
    <div className="card-wrapper">
      <div className="card-wrapper__info">
        <span className="card-wrapper__name">{category}</span>
        <span className="card-wrapper__details">
          {totalNumber === 1 && keyword.endsWith("s")
            ? `${totalNumber} ${keyword.slice(0, -1)}`
            : `${totalNumber} ${keyword}`}
        </span>
      </div>
      <div className={iconStyle}>
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
  iconsOutside: PropTypes.bool,
};
