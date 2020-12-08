import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import "./eat-out.scss";
import { HeroSlider } from "components/HeroSlider/HeroSlider";
import Carousel from "components/Carousel/Carousel";
import InputName from "components/InputField/InputName";

const EatOut = () => {
  return (
    <div className="eat-out">
      <Breadcrumbs />
      <section className="eat-out__discover-restaurants">
        <h2 className="eat-out__heading">Hungry? Find the best place!</h2>
        <HeroSlider />
        <Carousel />
        <InputName />
      </section>
    </div>
  );
};

export default EatOut;
