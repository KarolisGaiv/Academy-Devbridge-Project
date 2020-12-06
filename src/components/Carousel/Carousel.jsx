import React, { useState } from "react";
import "./carousel.scss";
import db from "../../db.json";
import { CardContainer } from "components/CardContainer/CardContainer";
import PropTypes from "prop-types";

const Carousel = (props) => {
  const restaurantList = db.restaurants.restaurantList;

  const slides = restaurantList.filter((restaurant) => restaurant.image);
  const [x, setX] = useState(() => 0);
  const [current, setCurrent] = useState(() => 0);

  const toLeft = () => {
    setCurrent((prevSlide) => {
      return prevSlide !== 0 ? prevSlide - 1 : (prevSlide = slides.length - 1);
    });

    setX((prevX) => {
      return current !== 0 ? prevX + 100 : (prevX = (slides.length - 1) * -100);
    });
  };

  const toRight = () => {
    setCurrent((prevSlide) => {
      return prevSlide !== slides.length - 1 ? prevSlide + 1 : (prevSlide = 0);
    });

    setX((prevX) => {
      return current !== slides.length - 1 ? prevX - 100 : (prevX = 0);
    });
  };

  return (
    <CardContainer styleName="card-container--shadow">
      <div className={`carousel ${props.blockStyles}`}>
        <div className={`carousel__slides ${props.slidesStyles}`}>
          {slides.map((slide, index) => (
            <img
              className={`carousel__image ${props.imageStyles}`}
              key={index}
              src={slide.image}
              alt=""
              style={{ transform: `translateX(${x}%)` }}
            />
          ))}
        </div>
        <div className={`carousel__content ${props.contentStyles}`}>
          <div className={`carousel__nav ${props.navStyles}`}>
            <button onClick={() => toLeft()}> {props.leftButton} </button>
            <button onClick={() => toRight()}> {props.rightButton} </button>
          </div>
          <div
            className={`carousel__pagination ${props.paginationContainerStyles}`}
          >
            {slides.map((slide, index) => {
              return index === current ? (
                <div
                  className={`${props.paginationStyles} ${props.choosedPaginationStyles}`}
                />
              ) : (
                <div className={`${props.paginationStyles}`} />
              );
            })}
          </div>
          {props.children}
        </div>
      </div>
    </CardContainer>
  );
};

export default Carousel;

Carousel.propTypes = {
  blockStyles: PropTypes.string,
  slidesStyles: PropTypes.string,
  imageStyles: PropTypes.string,
  contentStyles: PropTypes.string,
  navStyles: PropTypes.string,
  leftButton: PropTypes.string,
  rightButton: PropTypes.string,
  paginationContainerStyles: PropTypes.string,
  paginationStyles: PropTypes.string,
  choosedPaginationStyles: PropTypes.string,
  children: PropTypes.object,
};
