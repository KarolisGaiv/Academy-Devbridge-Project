import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "components/Breadcrumbs/Breadcrumbs";
import { SimilarRestaurantSection } from "components/RestaurantCarouselSections/SimilarRestaurantSection";
import "./restaurant-page.scss";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const response = await fetch(url);
    const data = await response.json();
    const restaurantList = data.restaurantList;
    setData(restaurantList);
    setLoading(false);
  }, []);

  return { data, loading };
};

const RestaurantPage = () => {
  const { restaurant } = useParams();

  const { data, loading } = useFetch("http://localhost:3008/restaurants");

  const restaurantName = restaurant;

  const mainRestaurant = data.find((rest) => rest.name === restaurantName);

  // const restaurants = data
  //   .filter((rest) => rest !== mainRestaurant)
  //   .filter((rest) =>
  //     rest.categories.some((item) => mainRestaurant.categories.includes(item))
  //   );

  return (
    <div className="restaurant">
      <Breadcrumbs />
      This will be restaurant {restaurant} page
      <section className="restaurant__similar-restaurants">
        <h3 className="restaurant__heading">Also you could like</h3>
        {loading ? (
          <div>...loading</div>
        ) : (
          <SimilarRestaurantSection
            mainRestaurant={mainRestaurant}
            filter="similar"
          />
        )}
        {/* <div>{restaurants.length}</div> */}
      </section>
    </div>
  );
};

export default RestaurantPage;
