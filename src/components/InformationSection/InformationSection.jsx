import React from "react";
import "./information-section.scss";
import { CardContainer } from "components/CardContainer/CardContainer";
import InformationCard from "./InformationCard/InformationCard";

const InformationSection = () => {
  return (
    <CardContainer styleName="card-container--shadow">
      <div className="information-section">
        <div className="information-section__column">
          <InformationCard
            icon="informationClock"
            title="Address"
            description="Islandijos pl. 32, Kaunas 47483"
          />
          <InformationCard
            icon="informationGlobe"
            title="Website"
            description="Islandijos p Kaunas 47483"
          />
        </div>
        <div className="information-section__column">
          <InformationCard
            icon="informationPhone"
            title="Phone number"
            description="Islandijos pl. 47483"
          />
          <InformationCard
            icon="informationMapPin"
            title="Work hours"
            description="Islandijos pl. 32, Kaunas 47483"
          />
        </div>
      </div>
    </CardContainer>
  );
};

export default InformationSection;
