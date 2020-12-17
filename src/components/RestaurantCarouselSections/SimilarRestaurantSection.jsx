import React from "react";
import PropTypes from "prop-types";
import RestaurantCarouselSection from "./RestaurantCarouselSection";

export const SimilarRestaurantSection = (props) => {
  return (
    <RestaurantCarouselSection
      mainRestaurant={props.mainRestaurant}
      filter={props.filter}
    />
  );
};

SimilarRestaurantSection.propTypes = {
  filter: PropTypes.string,
  mainRestaurant: PropTypes.object,
};
