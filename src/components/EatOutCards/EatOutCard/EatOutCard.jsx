import React from "react";
import { InfoCardContainer } from "../../InfoCardContainer/InfoCardContainer";
import "./eat-out-card.scss";

export class EatOutCard extends React.Component {
  render() {
    return (
      <InfoCardContainer styleName="info-card--shadow">
        <div className="restaurant-card">
          <div className="restaurant-card__top"></div>
          <div className="restaurant-card__bottom"></div>
        </div>
      </InfoCardContainer>
    );
  }
}
