import React from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "components/Breadcrumbs/Breadcrumbs";
import "./restaurant-page.scss";
import InformationSection from "components/InformationSection/InformationSection";

const RestaurantPage = () => {
  const { restaurant } = useParams();
  return (
    <div>
      <Breadcrumbs />
      <section>This will be restaurant {restaurant} page</section>
      <section className="restaurant-page__information">
        <h3 className="restaurant-page__heading">Information</h3>
        <InformationSection />
      </section>
      <section className="restaurant-page__location">
        <h3 className="restaurant-page__heading">Location</h3>
      </section>
    </div>
  );
};

export default RestaurantPage;
