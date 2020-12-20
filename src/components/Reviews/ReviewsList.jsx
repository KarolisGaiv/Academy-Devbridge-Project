import React from "react";
import propTypes from "prop-types";
import Review from "components/Reviews/Review";

const ReviewsList = (props) => {
  return (
    <div className="reviews-list">
      {props.reviews.map((review) => {
        return (
          <Review
            key={review.id}
            username={review.userName}
            comment={review.comment}
            rating={review.rating}
          />
        );
      })}
    </div>
  );
};

export default ReviewsList;

ReviewsList.propTypes = {
  reviews: propTypes.arrayOf(
    propTypes.shape({
      userName: propTypes.string,
      comment: propTypes.string,
      rating: propTypes.number,
    })
  ),
};
