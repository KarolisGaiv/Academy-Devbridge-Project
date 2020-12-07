import React from "react";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import DiscoverRestaurantSection from "../components/DiscoverRestaurantSection/DiscoverRestaurantSection";

const EatOut = () => {
  return (
    <div className="eat-out">
      <Breadcrumbs />
      <section className="eat-out__discover-restaurants">
        <h3 className="eat-out__heading">Discover near you</h3>
        <DiscoverRestaurantSection />
      </section>
    </div>
  );
};

export default EatOut;
