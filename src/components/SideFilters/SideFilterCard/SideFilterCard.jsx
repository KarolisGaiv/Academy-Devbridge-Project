import React from "react";
import "./side-filter-card.scss";
import { CardContainer } from "components/CardContainer/CardContainer";
import PropTypes from "prop-types";
import { Button } from "components/Button/Button";
import SVGIcon from "../../SVGIcon/SVGIcon";
import Divider from "components/Divider/Divider";
import { FilterOption } from "./FilterOption/FilterOption";

export const SideFilterCard = ({ categoryTitle, category }) => {
  return (
    <CardContainer styleName="card-container--shadow">
      <div className="side-filter-card">
        <div className="side-filter-card__header">
          <div className="side-filter-card__title"> {categoryTitle} </div>
          <Button className="side-filter-card__button">
            <div className="side-filter-card__button-text"> Clear all </div>
            <SVGIcon name="X" />
          </Button>
        </div>
        <Divider />
        <div className="side-filter-card__content">
          {category.map((title, index) => {
            return <FilterOption key={index} title={title} />;
          })}
        </div>
      </div>
    </CardContainer>
  );
};

SideFilterCard.propTypes = {
  categoryTitle: PropTypes.string,
  category: PropTypes.array,
};
