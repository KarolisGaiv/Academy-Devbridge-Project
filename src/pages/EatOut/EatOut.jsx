import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Carousel from "components/Carousel/Carousel";
import DiscoverRestaurantSection from "components/DiscoverRestaurantSection/DiscoverRestaurantSection";
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
      <section className="eat-out__categories-section">
        <h2 className="eat-out__heading">Categories</h2>
        <RestaurantCategories />
      </section>
      <section className="eat-out__discover-restaurants">
        <h3 className="eat-out__heading">Discover near you</h3>
        <DiscoverRestaurantSection />
      </section>
    </div>
  );
};

export default EatOut;
