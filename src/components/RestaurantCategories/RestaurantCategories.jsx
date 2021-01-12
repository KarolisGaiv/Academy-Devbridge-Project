import React, { useEffect, useState } from "react";
import CategoryCard from "../CategoryCard/CategoryCard";
import "./restaurant-categories.scss";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMyAPI() {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setLoading(false);
    }

    fetchMyAPI();
  }, [url]);

  return { data, loading };
};

const RestaurantCategories = () => {
  const { data, loading } = useFetch("http://localhost:3008/restaurants");

  if (loading) {
    return <div>...loading</div>;
  }

  // loop through all restaurants and push their categories into one array
  const existingCategories = data.restaurantList
    .map((i) => i.categories)
    .flat();

  //loop through provided array to count number of times element appears
  const countOccurences = (array, value) => {
    return array.reduce((accumulator, element) => {
      return value === element ? accumulator + 1 : accumulator;
    }, 0);
  };

  return (
    <div className="restaurant-categories">
      {data.categories.sort().map((item) => (
        <CategoryCard
          category={item}
          keyword={
            countOccurences(existingCategories, item) === 1 ? "place" : "places"
          }
          icon={item}
          totalNumber={countOccurences(existingCategories, item)}
          key={item}
          iconsOutside={true}
          directTo="eat-out"
          cardSmall
        />
      ))}
    </div>
  );
};

export default RestaurantCategories;
