import React from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import { Button } from "../../Button/Button";
import { RestWebAddress } from "../../RestaurantInfo/RestWebAddress/RestWebAddress";
// import { Rating } from "../../Rating/Rating";
// import { RestCategories } from "../../RestaurantInfo/RestCategories/RestCategories";
import "./restaurant-big-card.scss";

export const RestaurantBigCard = (props) => {
  const {
    checkins,
    image,
    title,
    rating,
    category,
    hours,
    web,
    address,
    description,
  } = props;

  return (
    <div className="restaurant-big-card">
      <RestaurantCard
        style="restaurant-card__top--fixed"
        checkins={checkins}
        src={image}
        title={title}
        // rating={rating}
        category={category}
        hours={hours}
      >
        <div className="restaurant-card__bottom">
          <RestWebAddress icon="Globe" text={web} />
          <RestWebAddress icon="MapPin" text={address} />
          <p className="restaurant-card__description">{description}</p>
          <div className="restaurant-card__button-field">
            <a href="">READ MORE</a>
            <Button
              className="button button--enabled"
              typeName="button"
              //   handleClick={increaseCheckin}
            >
              check-in
            </Button>
          </div>
        </div>
      </RestaurantCard>
    </div>
  );
};

RestaurantBigCard.propTypes = {
  web: PropTypes.string,
  address: PropTypes.string,
  checkins: PropTypes.number,
  rating: PropTypes.array,
  category: PropTypes.array,
  image: PropTypes.string,
  title: PropTypes.string,
  hours: PropTypes.string,
  description: PropTypes.string,
};
