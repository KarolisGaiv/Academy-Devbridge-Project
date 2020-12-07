import React from "react";
import Carousel from "components/Carousel/Carousel";
import "./hero-slider.scss";
import SVGIcon from "components/SVGIcon/SVGIcon";

export const HeroSlider = () => {
  return (
    <>
      <Carousel
        leftButton={<SVGIcon name="sliderNavLeft" />}
        rightButton={<SVGIcon name="sliderNavRight" />}
      ></Carousel>
    </>
  );
};
