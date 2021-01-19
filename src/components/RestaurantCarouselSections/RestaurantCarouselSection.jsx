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

  const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1); // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return Number(d.toFixed(2));
  };

  const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
  };

  const dynamicSort = (property) => {
    let sortOrder = 1;
    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function (a, b) {
      let result =
        a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
      return result * sortOrder;
    };
  };

  const [userLatitude, setUserLatitude] = useState(0);
  const [userLongitude, setUserLongitude] = useState(0);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        (position) => {
          setUserLatitude(position.coords.latitude);
          setUserLongitude(position.coords.longitude);
        },
        (err) => console.log(err),
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 10000 }
      );
    } else {
      console.log("Browser doesn't support geolocation");
    }
  });

  let restaurants = data;

  switch (props.filter) {
    case "new":
      restaurantFilterDate.setDate(restaurantFilterDate.getDate() - 365);
      restaurants = data.filter(
        (restaurant) =>
          Date.parse(restaurant.openingDate) > restaurantFilterDate
      );
      break;
    case "discover":
      restaurants = data
        .map((restaurant) => ({
          ...restaurant,
          distance: getDistanceFromLatLonInKm(
            userLatitude,
            userLongitude,
            restaurant.latitude,
            restaurant.longitude
          ),
        }))
        .sort(dynamicSort("distance"));
      console.log(restaurants);
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
