import React, { useState } from "react";
import "./restaurants-carousel.scss";
import PropTypes from "prop-types";
import { RestaurantBigCard } from "../RestaurantCards/RestaurantBigCard/RestaurantBigCard";
import { Ratings } from "../Rating/maxRatings";

const Carousel = (props) => {
  const { restaurantList } = props;

  const [x, setX] = useState(0);
  const [current, setCurrent] = useState(0);

  const toLeft = () => {
    setCurrent((prevSlide) => {
      return prevSlide !== 0
        ? prevSlide - 1
        : (prevSlide = restaurantList.length - 1);
    });

    setX((prevX) => {
      return current !== 0
        ? prevX + 100
        : (prevX = (restaurantList.length - 1) * -100);
    });
  };

  const toRight = () => {
    setCurrent((prevSlide) => {
      return prevSlide !== restaurantList.length - 1
        ? prevSlide + 1
        : (prevSlide = 0);
    });

    setX((prevX) => {
      return current !== restaurantList.length - 1 ? prevX - 100 : (prevX = 0);
    });
  };

  return (
    <div styleName="restaurants-carousel">
      <div className={`restaurants-carousel__buttons`}>
        <button onClick={() => toLeft()}> {"<"} </button>
        <button onClick={() => toRight()}> {">"} </button>
      </div>
      <div className={`restaurants-carousel__slider`}>
        {restaurantList.map((restaurant) => (
          <div
            key={restaurant.id}
            style={{ transform: `translateX(${x}%)` }}
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
