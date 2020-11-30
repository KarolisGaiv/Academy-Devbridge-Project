import React from "react";
import PropTypes from "prop-types";
import "./rating.scss";
import { useState } from "react";
import { Ratings } from "./maxRatings";

export const Rating = ({ rating }) => {
  const [newRating, setRating] = useState(null);
  var final_rating;

  if (newRating == null) final_rating = rating[1];
  else final_rating = Ratings.finalRating(rating[7], rating[8], newRating);

  return (
    <div className="rating">
      <div className="rating__collapse">
        <div className="rating__expand">
          {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;
            return (
              <input
                type="checkbox"
                className="rating__star"
                value={ratingValue}
                onClick={() => setRating(ratingValue)}
                key={star}
                tabIndex={0}
              />
            );
          })}
        </div>
        {final_rating}
      </div>
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.string,
  newRating: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
};
