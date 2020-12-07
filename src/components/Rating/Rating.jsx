import React, { useState } from "react";
import PropTypes from "prop-types";
import "./rating.scss";
import { Ratings } from "./maxRatings";
import SVGIcon from "components/SVGIcon/SVGIcon";

export const Rating = ({ rating }) => {
  const [newRating, setRating] = useState(null);
  const [tabstatus, setExpand] = useState("rating__collapse");
  const [hovered, setHover] = useState(null);
  var final_rating;

  if (newRating == null) final_rating = rating[0];
  else final_rating = Ratings.finalRating(rating[1], rating[2], newRating);

  return (
    <div className="rating">
      <div className={tabstatus}>
        <div className="rating__expand">
          {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;
            return (
              <label className="rating__label" key={i}>
                <input
                  className="rating__input"
                  type="radio"
                  name="newRating"
                  value={ratingValue}
                  onClick={() => setRating(ratingValue)}
                  key={star}
                  tabIndex={0}
                />
                <SVGIcon
                  className="rating__star"
                  name={
                    ratingValue <= (hovered || newRating)
                      ? "starFilled"
                      : "starEmpty"
                  }
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(null)}
                  onFocus={() => setExpand("on-tab")}
                  onBlur={() => setExpand("rating__collapse")}
                  key={i}
                />
              </label>
            );
          })}
        </div>
        {final_rating}
      </div>
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.array,
  newRating: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
};
