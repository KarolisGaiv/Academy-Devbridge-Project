import React, { useState, useEffect } from "react";
import "./restaurants-carousel.scss";
import PropTypes from "prop-types";
import { RestaurantBigCard } from "../RestaurantCards/RestaurantBigCard/RestaurantBigCard";
import { Ratings } from "../Rating/maxRatings";
import SliderNavButtons from "components/SliderNavButtons/SliderNavButtons";

const Carousel = (props) => {
  const { restaurantList } = props;

  const [start, setStart] = useState(0);
  const [finish, setFinish] = useState(null);
  const [length, setLength] = useState(null);

  const useCurrentWidth = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
      let timeoutId = null;
      const updateSize = () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => setWidth(window.innerWidth), 100);
        setStart(0);
        if (window.innerWidth > 1024) {
          setFinish(3);
          setLength(3);
        } else if (window.innerWidth > 769) {
          setFinish(2);
          setLength(2);
        } else {
          setFinish(1);
          setLength(1);
        }
      };
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return width;
  };

  const toRight = () => {
    if (finish < restaurantList.length) {
      setStart(start + length);
      setFinish(finish + length);
    }
  };

  const toLeft = () => {
    if (start > 0 && finish > 0) {
      setStart(start - length);
      setFinish(finish - length);
    }
  };

  return (
    <div className="restaurants-carousel">
      {restaurantList.length > 3 && (
        <div className="restaurants-carousel__buttons">
          <SliderNavButtons
            buttonIcon="buttonArrow"
            leftClicked={() => toLeft()}
            rightClicked={() => toRight()}
          />
        </div>
      )}
      <div className="restaurants-carousel__slider">
        {restaurantList.slice(start, finish).map((restaurant) => (
          <div key={restaurant.id} className="restaurants-carousel__slide">
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
