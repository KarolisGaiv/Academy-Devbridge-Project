import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import RestaurantCategories from "components/RestaurantCategories/RestaurantCategories";
import "./eat-out.scss";
import { HeroSlider } from "components/HeroSlider/HeroSlider";

const EatOut = () => {
  return (
    <div className="eat-out">
      <Breadcrumbs />
      <section className="eat-out__discover-restaurants">
        <h1 className="eat-out__title">Hungry? Find the best place!</h1>
        <HeroSlider />
      </section>
      <div className="eat-out__categories-section">
        <h2 className="eat-out__heading">Categories</h2>
        <RestaurantCategories />
      </div>
    </div>
  );
};

export default EatOut;
