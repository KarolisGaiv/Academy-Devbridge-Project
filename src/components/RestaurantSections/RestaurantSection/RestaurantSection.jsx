import React from "react";
import PropTypes from "prop-types";
import { RestaurantBigCard } from "../../RestaurantCards/RestaurantBigCard/RestaurantBigCard";
import { Ratings } from "../../Rating/maxRatings";
import "./restaurant-section.scss";
import RestaurantsCarousel from "../RestaurantsCarousel/RestaurantsCarousel";
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

  render() {
    const { error, isLoaded, restaurantList } = this.state;

    let restaurants = restaurantList;
    const restaurantFilterDate = new Date();

    switch (this.props.filter) {
      case "new":
        restaurantFilterDate.setDate(restaurantFilterDate.getDate() - 365);
        restaurants = restaurantList.filter(
          (restaurant) =>
            Date.parse(restaurant.openingDate) > restaurantFilterDate
        );
        break;
      case "category":
        restaurants = restaurantList.filter((restaurant) =>
          restaurant.categories.some(
            (category) => category === this.props.categoryName
          )
        );
        break;
      case "similar":
        restaurants = restaurantList.filter((restaurant) =>
          restaurant.categories.some((item) =>
            this.props.mainRestaurantCategories.includes(item)
          )
        );
        break;
      default:
        restaurants = restaurantList;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Is loading...</div>;
    } else {
      return (
        <div className="restaurant-section">
          {restaurants.map((restaurant) => (
            <RestaurantBigCard
              key={restaurant.id}
              checkins={restaurant.checkIns}
              image={restaurant.image}
              title={restaurant.name}
              description={restaurant.description}
              web={restaurant.website}
              address={restaurant.address}
              hours={Ratings.showHours(restaurantList.indexOf(restaurant))}
              categories={restaurant.categories}
              rating={Ratings.countRating(restaurantList.indexOf(restaurant))}
            />
          ))}
        <div className="discover-restaurant-section">
          <RestaurantsCarousel restaurantList={restaurantList} />
        </div>
      );
    }
  }
}

export default DiscoverRestaurantSection;

DiscoverRestaurantSection.propTypes = {
  restaurants: PropTypes.string,
  categoryName: PropTypes.string,
  filter: PropTypes.string,
  mainRestaurantCategories: PropTypes.array,
};
