import React, { useState } from "react";
import PropTypes from "prop-types";
import SVGIcon from "../SVGIcon/SVGIcon";
import "./rating.scss";

export const Rating = ({ rating }) => {
  const [setRating] = useState(null);
  return (
    <div className="rating">
      <div className="rating__collapse">
        <div className="rating__expand">
          {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;
            return (
              <button
                type="button"
                className="rating__star"
                key={star}
                onKeyPress={() => setRating(ratingValue)}
                tabIndex={0}
              >
                <SVGIcon name="starEmpty"></SVGIcon>
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
