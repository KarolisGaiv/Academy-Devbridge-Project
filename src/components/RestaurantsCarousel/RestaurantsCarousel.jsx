import React, { useState } from "react";
import "./restaurants-carousel.scss";
import PropTypes from "prop-types";
import { RestaurantBigCard } from "../RestaurantCards/RestaurantBigCard/RestaurantBigCard";
import { Ratings } from "../Rating/maxRatings";

const Carousel = (props) => {
  const { restaurantList } = props;

  const [xCoord, setXCoord] = useState(0);
  const [current, setCurrent] = useState(0);

  const toLeft = () => {
    let lastCoordIndex = 1; // variable to find last slide index coord
    if (window.screen.width > 1024) {
      lastCoordIndex = 3;
    } else if (window.screen.width > 768) {
      lastCoordIndex = 2;
    }

    setCurrent((prevSlide) => {
      return prevSlide !== 0
        ? prevSlide - 1
        : (prevSlide = restaurantList.length - lastCoordIndex);
    });

    setXCoord((prevXCoord) => {
      return current !== 0
        ? prevXCoord + 100
        : (prevXCoord = (restaurantList.length - lastCoordIndex) * -100);
    });
  };

  const toRight = () => {
    let lastCoordIndex = 1; // variable to find last slide index coord
    if (window.screen.width > 1024) {
      lastCoordIndex = 3;
    } else if (window.screen.width > 768) {
      lastCoordIndex = 2;
    }

    setCurrent((prevSlide) => {
      return prevSlide !== restaurantList.length - lastCoordIndex
        ? prevSlide + 1
        : (prevSlide = 0);
    });

    setXCoord((prevXCoord) => {
      return current !== restaurantList.length - lastCoordIndex
        ? prevXCoord - 100
        : (prevXCoord = 0);
    });
  };

  return (
    <div styleName="restaurants-carousel">
      <div className="restaurants-carousel__buttons">
        <button onClick={() => toLeft()}> {"<"} </button>
        <button onClick={() => toRight()}> {">"} </button>
      </div>
      <div className="restaurants-carousel__slider">
        {restaurantList.map((restaurant) => (
          <div
            key={restaurant.id}
            style={{ transform: `translateX(${xCoord}%)` }}
            className="restaurants-carousel__slide"
          >
            <RestaurantBigCard
              key={restaurant.id}
              checkins={restaurant.checkIns}
              image={restaurant.image}
              title={restaurant.name}
              description={restaurant.description}
              web={restaurant.website}
              address={restaurant.address}
              hours={Ratings.showHours(restaurantList.indexOf(restaurant))}
              categories={restaurant.categories}
              rating={Ratings.countRating(restaurantList.indexOf(restaurant))}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

Carousel.propTypes = {
  restaurantList: PropTypes.array,
};
