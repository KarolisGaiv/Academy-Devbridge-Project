import React from "react";
import PropTypes from "prop-types";
import RestaurantsCarousel from "../../RestaurantsCarousel/RestaurantsCarousel";
import "./restaurant-carousel-section.scss";

class RestaurantCarouselSection extends React.Component {
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
        <div className="restaurant-carousel-section">
          <RestaurantsCarousel restaurantList={restaurants} />
        </div>
      );
    }
  }
}

export default RestaurantCarouselSection;

RestaurantCarouselSection.propTypes = {
  filter: PropTypes.string,
  mainRestaurantCategories: PropTypes.array,
};
