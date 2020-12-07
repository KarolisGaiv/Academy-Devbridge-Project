import React from "react";
import { RestaurantBigCard } from "../RestaurantCards/RestaurantBigCard/RestaurantBigCard";
import "./discover-restaurant-section.scss";

class DiscoverRestaurantSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      restaurantList: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3008/restaurants")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            restaurantList: result.restaurantList,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  //   increaseCheckin() {
  //     return <RestaurantBigCard checkins={restaurant.checkIns + 1} />;
  //   }

  // const restaurants = database.restaurants.restaurantList;
  // const i = Math.floor(Math.random() * Math.floor(restaurants.length));
  // const j = Math.floor(Math.random() * Math.floor(restaurants.length));
  // const k = Math.floor(Math.random() * Math.floor(restaurants.length));

  render() {
    const { error, isLoaded, restaurantList } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Is loading...</div>;
    } else {
      return (
        <div className="discover-restaurant-section">
          {restaurantList.map((restaurant) => (
            <RestaurantBigCard
              key={restaurant.id}
              checkins={restaurant.checkIns}
              image={restaurant.image}
              title={restaurant.name}
              description={restaurant.description}
              web={restaurant.website}
              address={restaurant.address}
              hours={
                restaurant.openingHours[0].hours.substring(0, 2) +
                ":00 " +
                restaurant.openingHours[0].hours.substring(3, 7) +
                ":00"
              }
              categories={restaurant.categories}
              rating={Number(
                (
                  Object.values(restaurant.reviews)
                    .map((x) => x.rating)
                    .reduce((a, b) => a + b, 0) / restaurant.reviews.length
                ).toFixed(1)
              )}
            />
          ))}
        </div>
      );
    }
  }
}

export default DiscoverRestaurantSection;
