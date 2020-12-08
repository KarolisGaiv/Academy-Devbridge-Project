import React from "react";
import PropTypes from "prop-types";

export const NewRating = ({ rating }) => {
  return <div className="rating">{rating}</div>;
};

NewRating.propTypes = {
  rating: PropTypes.array,
};
