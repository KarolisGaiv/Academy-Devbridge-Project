import React from "react";
import { EatOutIntroCard } from "../EatOutIntroCard/EatOutIntroCard";
import { EatOutCard } from "../EatOutCard/EatOutCard";
import "./eat-out-wrapper.scss";

export class EatOutWrapper extends React.Component {
  render() {
    return (
      <div className="eat-out-wrapper">
        <EatOutIntroCard></EatOutIntroCard>
        <EatOutIntroCard></EatOutIntroCard>
        <EatOutCard></EatOutCard>
      </div>
    );
  }
}
