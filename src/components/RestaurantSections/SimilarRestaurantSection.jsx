import React from "react";
import PropTypes from "prop-types";
import RestaurantSection from "components/RestaurantSections/RestaurantSection/RestaurantSection";

export const SimilarRestaurantSection = (props) => {
  return (
    <RestaurantSection
      mainRestaurantCategories={props.categories}
      filter={props.filter}
    />
  );
};

SimilarRestaurantSection.propTypes = {
  filter: PropTypes.string,
  categories: PropTypes.array,
};
