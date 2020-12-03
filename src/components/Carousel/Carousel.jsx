import React, { useState } from "react";
import "./carousel.scss";
import db from "../../db.json";

const Carousel = () => {
  //const slides = ["1", "2", "3", "4", "5"];
  const slides = db.restaurants.restaurantList.filter(
    (restaurant) => restaurant.image
  );
  const [x, setX] = useState(() => 0);
  const [current, setCurrent] = useState(() => 1);

  const toLeft = () => {
    setCurrent((prevCurrent) => {
      return prevCurrent !== 1
        ? prevCurrent - 1
        : (prevCurrent = slides.length);
    });

    setX((prevX) => {
      return current !== 1 ? prevX + 100 : (prevX = (slides.length - 1) * -100);
    });
  };

  const toRight = () => {
    setCurrent((prevCurrent) => {
      return prevCurrent !== slides.length
        ? prevCurrent + 1
        : (prevCurrent = 1);
    });

    setX((prevX) => {
      return current !== slides.length ? prevX - 100 : (prevX = 0);
    });
  };

  return (
    <div className="carousel-body">
      <div className="slides">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            alt=""
            style={{ transform: `translateX(${x}%)` }}
          />
        ))}
      </div>
      <div className="carousel">
        <button onClick={() => toLeft()}> {`<`} </button>
        <button onClick={() => toRight()}> {`>`} </button>
        {current}
      </div>
    </div>
  );
};

export default Carousel;
