import React from "react";
import propTypes from "prop-types";
import { Button } from "components/Button/Button";
import ReviewsList from "./ReviewsList";
import "./reviews-section.scss";

const ReviewsSection = (props) => {
  return (
    <>
      <ReviewsList reviews={props.reviews} />
      <Button className="button button--enabled">Show more</Button>
    </>
  );
};

export default ReviewsSection;

ReviewsSection.propTypes = {
  reviews: propTypes.object,
};
