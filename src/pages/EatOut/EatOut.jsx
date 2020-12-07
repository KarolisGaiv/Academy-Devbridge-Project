import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Carousel from "components/Carousel/Carousel";
import "./eat-out.scss";

const EatOut = () => {
  return (
    <div className="eat-out">
      <Breadcrumbs />
      <section className="eat-out__discover-restaurants">
        <h2 className="eat-out__heading">Hungry? Find the best place!</h2>
        <Carousel />
      </section>
    </div>
  );
};

export default EatOut;
