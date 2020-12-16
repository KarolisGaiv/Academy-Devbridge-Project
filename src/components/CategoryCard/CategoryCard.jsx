import React from "react";
import "./category-card.scss";
import PropTypes from "prop-types";
import SVGIcon from "../SVGIcon/SVGIcon";
import classNames from "classnames";
import { Link } from "react-router-dom";

export const ResCard = ({
  category,
  totalNumber,
  icon,
  keyword,
  iconsOutside,
  directTo,
}) => {
  const iconStyle = classNames("card-wrapper__icon", {
    "card-wrapper__icon--outside": iconsOutside === true,
  });

  return (
    <div className="card-wrapper">
      <Link
        title={`${category} Page`}
        to={`${directTo}/${category}`}
        className="card-wrapper__link"
        aria-label={`${category}, ${totalNumber} ${keyword}`}
      >
        <div className="card-wrapper__container">
          <div className="card-wrapper__info">
            <span className="card-wrapper__name">{category}</span>
            <span className="card-wrapper__details">
              {`${totalNumber} ${keyword}`}
            </span>
          </div>
          <div className={iconStyle}>
            <SVGIcon name={icon} />
          </div>
        </div>
      </Link>
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
  directTo: PropTypes.string,
};
