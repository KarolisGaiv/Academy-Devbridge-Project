import React, { useState } from "react";
import PropTypes from "prop-types";
import "./rating.scss";
import { Ratings } from "./maxRatings";
import SVGIcon from "components/SVGIcon/SVGIcon";

export const Rating = ({ rating }) => {
  const [newRating, setRating] = useState(null);
  const [tabstatus, setExpand] = useState("rating__collapse");
  const [hovered, setHover] = useState(null);
  const [tabbed, setTabCount] = useState(null);
  const [fifthRating, setHeight] = useState(null);

  const handleTab = (value) => {
    setTabCount(value);
    setHeight(null);
  };
  const handleFocus = () => {
    setExpand("on-tab");
    setHeight(null);
  };
  const handleBlur = (index) => {
    setExpand("rating__collapse");
    if (index === 4 && tabbed === 5) setHeight("fifth-rating-height");
  };

  var final_rating;

  if (newRating == null) final_rating = rating[1];
  else final_rating = Ratings.finalRating(rating[7], rating[8], newRating);

  return (
    <div className="rating">
      <div className={tabstatus}>
        <div className="rating__expand">
          {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;
            return (
              <button
                key={i}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
                onKeyUp={() => handleTab(ratingValue)}
                onFocus={() => handleFocus()}
                onBlur={() => handleBlur(i)}
                onClick={() => setRating(ratingValue)}
              >
                <input
                  className="rating__input"
                  type="radio"
                  name="newRating"
                  value={ratingValue}
                  key={star}
                  tabIndex={0}
                />
                <SVGIcon
                  className="rating__star"
                  name={
                    ratingValue <= (newRating || hovered || tabbed)
                      ? "starFilled"
                      : "starEmpty"
                  }
                  key={i}
                />
              </button>
            );
          })}
        </div>
        <div className={fifthRating}>{final_rating}</div>
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
