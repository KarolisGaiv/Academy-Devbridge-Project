// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Breadcrumbs from "components/Breadcrumbs/Breadcrumbs";
// import RestaurantsCarousel from "components/RestaurantsCarousel/RestaurantsCarousel";
// import "./restaurant-page.scss";

// const useFetch = (url) => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(async () => {
//     const response = await fetch(url);
//     const data = await response.json();
//     const restaurantList = data.restaurantList;
//     setData(restaurantList);
//     setLoading(false);
//   }, []);

//   return { data, loading };
// };

// const RestaurantPage = () => {
//   const { restaurant } = useParams();

//   const { data, loading } = useFetch("http://localhost:3008/restaurants");

//   const mainRestaurant = data.find((rest) => rest.name === restaurant);

//   const similarRestaurants = data
//     .filter((rest) => rest !== mainRestaurant)
//     .filter((rest) =>
//       rest.categories.some((item) => mainRestaurant.categories.includes(item))
//     );

//   return (
//     <div className="restaurant">
//       <Breadcrumbs />
//       This will be restaurant {restaurant} page
//       <section className="restaurant__similar-restaurants">
//         <h3 className="restaurant__heading">Also you could like</h3>
//         {loading ? (
//           <div>...loading</div>
//         ) : (
//           <RestaurantsCarousel restaurantList={similarRestaurants} />
//         )}
//       </section>
//       <div>{mainRestaurant.website}</div> /* čia neveikia */
//     </div>
//   );
// };

// export default RestaurantPage;

import React from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "components/Breadcrumbs/Breadcrumbs";
import RestaurantsCarousel from "components/RestaurantsCarousel/RestaurantsCarousel";
import db from "../../db.json";
import "./restaurant-page.scss";

const RestaurantPage = () => {
  const { restaurant } = useParams();

  const restaurants = db.restaurants.restaurantList;

  const mainRestaurant = restaurants.find((rest) => rest.name === restaurant);

  const similarRestaurants = restaurants
    .filter((rest) => rest !== mainRestaurant)
    .filter((rest) =>
      rest.categories.some((item) => mainRestaurant.categories.includes(item))
    );

  return (
    <div className="restaurant">
      <Breadcrumbs />
      This will be restaurant {restaurant} page
      <section className="restaurant__similar-restaurants">
        <h3 className="restaurant__heading">Also you could like</h3>
        <RestaurantsCarousel restaurantList={similarRestaurants} />
      </section>
      <div>{mainRestaurant.website}</div> /* čia veikia */
    </div>
  );
};

export default RestaurantPage;
