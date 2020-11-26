import React, { useState } from "react";
import PropTypes from "prop-types";
import { ReactComponent as StarE } from "assets/starEmpty.svg";
import "./rating.scss";

export const Rating = ({ rating }) => {
  const [setRating] = useState(null);
  return (
    <div className="box">
      <div className="rating">
        <div className="rating__expand">
          {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;
            return (
              <span
                key={star}
                onKeyPress={() => setRating(ratingValue)}
                role="button"
                tabIndex={0}
              >
                <StarE></StarE>
              </span>
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
