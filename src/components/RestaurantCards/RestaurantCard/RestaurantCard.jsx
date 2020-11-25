import React from "react";
import { CardContainer } from "../../CardContainer/CardContainer";
import "./restaurant-card.scss";

export class RestaurantCard extends React.Component {
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
      return <div>Loading...</div>;
    } else {
      return (
        <CardContainer styleName="card-container--shadow">
          <div className="restaurant-card">
            {restaurantList.map((restaurant) => (
              <img
                key={restaurant.id}
                src={restaurant.image}
                alt=""
                className="restaurant-card__top"
              ></img>
            ))}
            <div className="restaurant-card__bottom"></div>
          </div>
        </CardContainer>
      );
    }
  }
}
