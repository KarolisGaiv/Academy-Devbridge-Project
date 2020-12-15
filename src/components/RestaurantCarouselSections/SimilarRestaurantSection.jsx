import React from "react";
import PropTypes from "prop-types";
import RestaurantCarouselSection from "./RestaurantCarouselSection";

export const SimilarRestaurantSection = (props) => {
  return (
    <RestaurantCarouselSection
      mainRestaurantCategories={props.categories}
      filter={props.filter}
    />
  );
};

SimilarRestaurantSection.propTypes = {
  filter: PropTypes.string,
  categories: PropTypes.array,
};
