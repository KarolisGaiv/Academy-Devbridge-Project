import React, { useState, useEffect, useRef } from "react";
import PropTypes, { string } from "prop-types";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import { Button } from "../../Button/Button";
import { RestWebAddress } from "../../RestaurantInfo/RestWebAddress/RestWebAddress";
import { Link } from "../../Link/Link";
import "./restaurant-big-card.scss";

export const RestaurantBigCard = (props) => {
  const [expanded, setExpanded] = useState(false);

  const [checkinNumberState, setCheckinNumberState] = useState({
    checkinNumber: props.checkins,
    clicked: false,
  });

  const pElement = useRef(null);

  useEffect(() => {
    const offsetHeight = pElement.current.offsetHeight;
    const scrollHeight = pElement.current.scrollHeight;
    const offsetWidth = pElement.current.offsetWidth;
    const scrollWidth = pElement.current.scrollWidth;
    return offsetHeight, scrollHeight, offsetWidth, scrollWidth;
  }, [pElement]);

  const toggledClass = expanded
    ? "restaurant-card__description restaurant-card__description--expanded"
    : "restaurant-card__description restaurant-card__description--collapsed";

  const increaseCheckinNumber = () => {
    if (checkinNumberState.clicked) {
      setCheckinNumberState({
        checkinNumber: checkinNumberState.checkinNumber - 1,
        clicked: false,
      });
    } else {
      setCheckinNumberState({
        checkinNumber: checkinNumberState.checkinNumber + 1,
        clicked: true,
      });
    }
  };

  //   var element = document.querySelector('.pcontent');
  // if( (element.offsetHeight < element.scrollHeight) || (element.offsetWidth < element.scrollWidth)){
  //    // your element have overflow
  //   document.querySelector('#read-more').style.visibility = "visible";
  // }
  // else{
  //   //your element don't have overflow

  return (
    <div className="restaurant-big-card">
      <RestaurantCard
        customClass="restaurant-card__top--fixed"
        checkins={checkinNumberState.checkinNumber}
        image={props.image}
        title={props.title}
        rating={props.rating}
        categories={props.categories}
        hours={props.hours}
      >
        <div className="restaurant-card__bottom">
          <RestWebAddress
            icon="Globe"
            text={props.web
              .replace(/^(?:https?:\/\/)?(?:www\.)?/i, "")
              .split("/")}
          />
          <RestWebAddress icon="MapPin" text={props.address} />
          <p className={toggledClass} ref={pElement}>
            {props.description}
          </p>
          <div className="restaurant-card__button-field">
            {pElement.offsetHeight === pElement.scrollHeight && (
              <Link handleClick={() => setExpanded(!expanded)}>
                {expanded ? "Read less" : "Read more"}
              </Link>
            )}
            <Button
              className="button button--enabled"
              typeName="button"
              handleClick={increaseCheckinNumber}
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
  categories: PropTypes.array,
  image: PropTypes.string,
  title: PropTypes.string,
  hours: PropTypes.string,
  description: PropTypes.string,
  toggleClass: string,
};
