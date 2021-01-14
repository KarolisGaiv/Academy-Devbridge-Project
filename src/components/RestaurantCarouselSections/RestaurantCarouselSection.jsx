import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import RestaurantsCarousel from "../RestaurantsCarousel/RestaurantsCarousel";
import { ProgressIndicator } from "components/ProgressIndicator/ProgressIndicator";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMyAPI() {
      const response = await fetch(url);
      const data = await response.json();
      const restaurantList = data.restaurantList;
      setData(restaurantList);
      setLoading(false);
    }

    fetchMyAPI();
  }, [url]);

  return { data, loading };
};

const RestaurantCarouselSection = (props) => {
  const { data, loading } = useFetch("http://localhost:3008/restaurants");

  const restaurantFilterDate = new Date();

  let restaurants = data;

  switch (props.filter) {
    case "new":
      restaurantFilterDate.setDate(restaurantFilterDate.getDate() - 365);
      restaurants = data.filter(
        (restaurant) =>
          Date.parse(restaurant.openingDate) > restaurantFilterDate
      );
      break;
    default:
      restaurants = data;
  }

  return loading ? (
    <ProgressIndicator message="Loading..." />
  ) : (
    <RestaurantsCarousel restaurantList={restaurants} />
  );
};

export default RestaurantCarouselSection;

RestaurantCarouselSection.propTypes = {
  filter: PropTypes.string,
};
