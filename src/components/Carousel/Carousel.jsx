import React, { useState } from "react";
import "./carousel.scss";
import db from "../../db.json";
import { CardContainer } from "components/CardContainer/CardContainer";
import { LabelRed } from "components/Text/LabelRed/LabelRed";
import { DescriptionGrey } from "components/Text/DescriptionGrey/DescriptionGrey";
import { RestTitle } from "components/RestaurantInfo/RestTitle/RestTitle";
import PropTypes from "prop-types";

const Carousel = (props) => {
  const restaurantList = db.restaurants.restaurantList;

  const slides = restaurantList.filter((restaurant) => restaurant.image);
  const slides2 = restaurantList.filter((restaurant) => restaurant);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [current, setCurrent] = useState(0);
  const [currentY, setCurrentY] = useState(0);

  const toLeft = () => {
    setCurrent((prevSlide) => {
      return prevSlide !== 0 ? prevSlide - 1 : (prevSlide = slides.length - 1);
    });
    setCurrentY((prevSlide) => {
      return prevSlide !== 0 ? prevSlide - 1 : (prevSlide = slides.length - 1);
    });

    setX((prevX) => {
      return current !== 0 ? prevX + 100 : (prevX = (slides.length - 1) * -100);
    });
    setY((prevY) => {
      return currentY !== 0
        ? prevY + 100
        : (prevY = (slides.length - 1) * -100);
    });
  };

  const toRight = () => {
    setCurrent((prevSlide) => {
      return prevSlide !== slides.length - 1 ? prevSlide + 1 : (prevSlide = 0);
    });
    setCurrentY((prevSlide) => {
      return prevSlide !== 0 ? prevSlide - 1 : (prevSlide = slides.length - 1);
    });
    setX((prevX) => {
      return current !== slides.length - 1 ? prevX - 100 : (prevX = 0);
    });
    setY((prevY) => {
      return currentY !== slides.length - 1 ? prevY - 100 : (prevY = 0);
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
          <div className={`carousel__nav ${props.navStyles}`}>
            <button onClick={() => toLeft()}> {props.leftButton} </button>
            <button onClick={() => toRight()}> {props.rightButton} </button>
          </div>
          <div className={`carousel__info ${props.infoStyles}`}>
            {slides2.map((slide, index) => (
              <div
                key={index}
                style={{ transform: `translateY(${y}%)` }}
                className="hero__box"
              >
                <LabelRed text={slide.slogan}> </LabelRed>
                <RestTitle
                  title={slide.name}
                  titleStyle="hero__title"
                ></RestTitle>
                <DescriptionGrey
                  descStyle="hero__desc"
                  text={slide.description}
                ></DescriptionGrey>
              </div>
            ))}
          </div>
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
  content: PropTypes.object,
  infoStyles: PropTypes.string,
};
