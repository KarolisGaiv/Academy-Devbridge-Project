import React from "react";
import RestaurantSection from "components/RestaurantSections/RestaurantSection/RestaurantSection";

export const SimilarRestaurantSection = () => {
  return (
    <RestaurantSection
      mainRestaurantCategories={["Pizza", "Ramen"]}
      filter="similar"
    />
  );
};
