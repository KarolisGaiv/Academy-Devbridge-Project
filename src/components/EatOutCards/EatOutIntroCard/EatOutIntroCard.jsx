import React from "react";
import { Redirect } from "react-router-dom";
import { EatOutCardContainer } from "../EatOutCardContainer/EatOutCardContainer";
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
      return <Redirect to="/login" />;
    } else {
      alert("not working");
    }
    return (
      <EatOutCardContainer>
        <div className="intro-card">
          <h2 className="intro-card__heading">
            View all your favorite lunch spots and more
          </h2>
          <Button className="button button--enabled" onClick={this.setRedirect}>
            browse list
          </Button>
        </div>
      </EatOutCardContainer>
    );
  }
}
