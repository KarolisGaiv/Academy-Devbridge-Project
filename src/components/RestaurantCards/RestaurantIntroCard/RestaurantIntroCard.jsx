import React from "react";
import { Redirect } from "react-router-dom";
import { CardContainer } from "../../CardContainer/CardContainer";
import { Button } from "../../Button/Button";
import "./restaurant-intro-card.scss";

export class RestaurantIntroCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
    this.setRedirect = this.setRedirect.bind(this);
  }

  setRedirect = () => {
    this.setState({
      redirect: true,
    });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/eat-out" />;
    }
    return (
      <CardContainer>
        <div className="restaurant-intro-card">
          <h2 className="restaurant-intro-card__heading">
            View all your favorite lunch spots and more
          </h2>
          <Button
            className="button button--enabled"
            handleClick={this.setRedirect}
          >
            browse list
          </Button>
        </div>
      </CardContainer>
    );
  }
}
