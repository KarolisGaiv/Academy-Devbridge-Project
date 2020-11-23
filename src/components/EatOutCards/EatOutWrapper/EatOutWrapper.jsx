import React from "react";
import { InfoCardContainer } from "../../InfoCardContainer/InfoCardContainer";
import { EatOutIntroCard } from "../EatOutIntroCard/EatOutIntroCard";
import "./eat-out-wrapper.scss";

export class EatOutWrapper extends React.Component {
  render() {
    return (
      <div className="eat-out-wrapper">
        <EatOutIntroCard></EatOutIntroCard>
        <EatOutIntroCard></EatOutIntroCard>
        <EatOutIntroCard></EatOutIntroCard>
      </div>
    );
  }
}
