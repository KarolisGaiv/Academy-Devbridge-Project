import React from "react";
import PropTypes from "prop-types";
import SVGIcon from "../SVGIcon/SVGIcon";
import "./rating.scss";

export const Rating = ({ rating }) => {
  return (
    <div className="rating">
      <div className="rating__collapse">
        <div className="rating__expand">
          {[...Array(5)].map((star) => {
            return (
              <button
                type="button"
                className="rating__star"
                key={star}
                tabIndex={0}
              >
                <SVGIcon name="starEmpty" />
              </button>
            );
          })}
        </div>
        {rating}
      </div>
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
};
