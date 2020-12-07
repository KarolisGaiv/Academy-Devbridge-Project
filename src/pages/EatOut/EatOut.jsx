import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import "./eat-out.scss";
import { HeroSlider } from "components/HeroSlider/HeroSlider";

const EatOut = () => {
  return (
    <div className="eat-out">
      <Breadcrumbs />
      <section className="eat-out__discover-restaurants">
        <h2 className="eat-out__heading">Hungry? Find the best place!</h2>
        <HeroSlider />
      </section>
    </div>
  );
};

export default EatOut;
