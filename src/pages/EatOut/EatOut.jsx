import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Carousel from "components/Carousel/Carousel";
import DiscoverRestaurantSection from "components/DiscoverRestaurantSection/DiscoverRestaurantSection";
import "./eat-out.scss";

const EatOut = () => {
  return (
    <div className="eat-out">
      <Breadcrumbs />
      <section>
        <h2 className="eat-out__heading">Hungry? Find the best place!</h2>
        <Carousel />
      </section>
      <section className="eat-out__discover-restaurants">
        <h3 className="eat-out__small-heading">Discover near you</h3>
        <DiscoverRestaurantSection />
      </section>
    </div>
  );
};

export default EatOut;
