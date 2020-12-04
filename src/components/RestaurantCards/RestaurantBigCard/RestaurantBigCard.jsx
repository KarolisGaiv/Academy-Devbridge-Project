import React from "react";
import PropTypes from "prop-types";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import { Button } from "../../Button/Button";
import { RestWebAddress } from "../../RestaurantInfo/RestWebAddress/RestWebAddress";
// import { Rating } from "../../Rating/Rating";
// import { RestCategories } from "../../RestaurantInfo/RestCategories/RestCategories";
import "./restaurant-big-card.scss";

export const RestaurantBigCard = (props) => {
  return (
    <div className="restaurant-big-card">
      <RestaurantCard
        style="restaurant-card__top--fixed"
        checkins={props.checkins}
        src={props.image}
        title={props.title}
        // rating={props.rating}
        category={props.category}
        hours={props.hours}
      >
        <div className="restaurant-card__bottom">
          <RestWebAddress icon="Globe" text={props.web} />
          <RestWebAddress icon="MapPin" text={props.address} />
          <p className="restaurant-card__description">{props.description}</p>
          <div className="restaurant-card__button-field">
            <a href="">READ MORE</a>
            <Button
              className="button button--enabled"
              typeName="button"
              // handleClick={this.setRedirect}
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
