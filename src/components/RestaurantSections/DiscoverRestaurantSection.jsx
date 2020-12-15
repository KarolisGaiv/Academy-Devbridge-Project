import React from "react";
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
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Is loading...</div>;
    } else {
      return (
        <div className="discover-restaurant-section">
          <RestaurantsCarousel restaurantList={restaurantList} />
        </div>
      );
    }
  }
}

export default DiscoverRestaurantSection;
