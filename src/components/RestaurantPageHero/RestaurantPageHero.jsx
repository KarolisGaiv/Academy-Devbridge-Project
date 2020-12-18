import React from "react";
import PropTypes from "prop-types";
import RestCategories from "../RestaurantInfo/RestCategories/RestCategories";
import RestTitle from "../RestaurantInfo/RestTitle/RestTitle";
import "./restaurant-page-hero.scss";

export const RestaurantPageHero = (props) => {
  return (
    <div className="restaurant-page-hero">
      <img src={props.image} alt=""></img>
      <RestCategories />
      <RestTitle />
    </div>
  );
};

RestaurantPageHero.propTypes = {
  image: PropTypes.string,
};
