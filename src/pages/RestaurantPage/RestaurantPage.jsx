import React from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "components/Breadcrumbs/Breadcrumbs";

const RestaurantPage = () => {
  const { restaurant } = useParams();

  return (
    <div>
      <Breadcrumbs />
      <section>This will be restaurant {restaurant} page</section>
    </div>
  );
};

export default RestaurantPage;
