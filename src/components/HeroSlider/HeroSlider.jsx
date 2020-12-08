import React from "react";
import Carousel from "components/Carousel/Carousel";
import "./hero-slider.scss";
import SVGIcon from "components/SVGIcon/SVGIcon";
import { LabelRed } from "components/Text/LabelRed/LabelRed";
import { DescriptionGrey } from "components/Text/DescriptionGrey/DescriptionGrey";
import { RestTitle } from "components/RestaurantInfo/RestTitle/RestTitle";

export const HeroSlider = () => {
  return (
    <>
      <Carousel
        blockStyles="hero"
        slidesStyles="hero__slides"
        contentStyles="hero__content"
        navStyles="hero__nav"
        paginationContainerStyles="hero__pagination-container"
        paginationStyles="hero__pagination"
        choosedPaginationStyles="hero__pagination hero__pagination--choosed"
        leftButton={<SVGIcon name="sliderNavLeft" />}
        rightButton={<SVGIcon name="sliderNavRight" />}
        infoStyles="hero__info"
        content={
          <>
            <LabelRed text="texttt"> </LabelRed>
            <RestTitle title="Restorano pavadinimas"> </RestTitle>
            <DescriptionGrey
              descStyle="hero__desc"
              text="dsdas asdad adas"
            ></DescriptionGrey>
          </>
        }
      ></Carousel>
    </>
  );
};
