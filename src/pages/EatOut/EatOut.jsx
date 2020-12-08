import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Carousel from "components/Carousel/Carousel";
import RestaurantCategories from "components/RestaurantCategories/RestaurantCategories";
import "./eat-out.scss";

const EatOut = () => {
  return (
    <div className="eat-out">
      <Breadcrumbs />
      <section className="eat-out__discover-restaurants">
        <h1 className="eat-out__title">Hungry? Find the best place!</h1>
        <Carousel />
      </section>
      <div className="eat-out__categories-section">
        <h2 className="eat-out__heading">Categories</h2>
        <RestaurantCategories />
      </div>
    </div>
  );
};

export default EatOut;
