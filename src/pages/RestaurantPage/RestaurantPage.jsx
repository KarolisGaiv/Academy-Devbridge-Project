import React from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "components/Breadcrumbs/Breadcrumbs";
import { SimilarRestaurantSection } from "components/RestaurantCarouselSections/SimilarRestaurantSection";
import "./restaurant-page.scss";
import db from "../../db.json";

import { DiscoverRestaurantSection } from "../../components/RestaurantCarouselSections/DiscoverRestaurantSection";

const RestaurantPage = () => {
  const { restaurant } = useParams();

  const restaurantName = restaurant;

  const mainRestaurant = db.restaurants.restaurantList.find(
    (restaurant) => restaurant.name === restaurantName
  );

  return (
    <div>
      <Breadcrumbs />
      This will be restaurant {restaurant} page
      <section className="restaurant__similar-restaurants">
        <h3 className="restaurant__heading">Also you could like</h3>
        <SimilarRestaurantSection
          categories={mainRestaurant.categories}
          filter="similar"
        />
      </section>
    </div>
  );
};

export default RestaurantPage;
