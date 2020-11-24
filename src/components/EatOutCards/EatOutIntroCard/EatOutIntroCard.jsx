import React from "react";
import { Redirect } from "react-router-dom";
import { InfoCardContainer } from "../../InfoCardContainer/InfoCardContainer";
import { Button } from "../../Button/Button";
import "./eat-out-intro-card.scss";

export class EatOutIntroCard extends React.Component {
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
      <InfoCardContainer>
        <div className="eat-out-intro-card">
          <h2 className="eat-out-intro-card__heading">
            View all your favorite lunch spots and more
          </h2>
          <Button
            className="button button--enabled"
            handleClick={this.setRedirect}
          >
            browse list
          </Button>
        </div>
      </InfoCardContainer>
    );
  }
}
