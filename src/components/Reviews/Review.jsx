import React from "react";
import SVGIcon from "../SVGIcon/SVGIcon";
import { CardContainer } from "../CardContainer/CardContainer";
import "./review.scss";

const Review = ( props ) => {
  return (
    <CardContainer styleName="card-container--shadow">
      <div className="review">
        <div className="review__username">Firstname Lastname</div>
        <p className="review__text">Food didnt meet my expectations</p>
        <div className="review__rating">
          <div className="review_rating-svg">
            <SVGIcon name="starFilled" />
          </div>
          <span className="review__rating-number">4.5</span>
        </div>
      </div>
    </CardContainer>
  );
};

export default Review;
