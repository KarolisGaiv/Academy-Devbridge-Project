import React from "react";
import PropTypes from "prop-types";
import { CardContainer } from "../../CardContainer/CardContainer";
import { CheckIns } from "../../CheckIns/CheckIns";
import { Rating } from "../../Rating/Rating";
import { RestCategories } from "../../RestaurantInfo/RestCategories/RestCategories";
import { RestTitle } from "../../RestaurantInfo/RestTitle/RestTitle";
import { RestHours } from "../../RestaurantInfo/RestHours/RestHours";
import { HeartButton } from "../../../components/HeartButton/HeartButton";
import "./restaurant-card.scss";

const RestaurantCard = (props) => {
  return (
    <CardContainer styleName="card-container--shadow">
      <div className="restaurant-card">
        <div className="restaurant-card__top">
          <div className="restaurant-card__checkins-rating">
            <CheckIns checkins={props.checkins}></CheckIns>
            <Rating rating={props.rating}></Rating>
          </div>
          <div className="restaurant-card__categories">
            <RestCategories category={props.category}></RestCategories>
          </div>
          <div className="restaurant-card__background"></div>
          <img
            src={props.image}
            alt=""
            className="restaurant-card__image"
          ></img>
        </div>
        <div className="restaurant-card__middle">
          <div className="restaurant-card__title-like">
            <RestTitle title={props.title}></RestTitle>
            <HeartButton></HeartButton>
          </div>
          <div className="restaurant-card__hours">
            <RestHours hours={props.hours}></RestHours>
          </div>
        </div>
      </div>
    </CardContainer>
  );
};
// }

export default RestaurantCard;

RestaurantCard.propTypes = {
  checkins: PropTypes.number,
  rating: PropTypes.string,
  category: PropTypes.array,
  image: PropTypes.string,
  title: PropTypes.string,
  hours: PropTypes.string,
};
