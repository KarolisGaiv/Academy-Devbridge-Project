import React, { useState } from "react";
import "./side-filter-card.scss";
import { CardContainer } from "components/CardContainer/CardContainer";
import PropTypes from "prop-types";
import { Button } from "components/Button/Button";
import SVGIcon from "../../SVGIcon/SVGIcon";
import Divider from "components/Divider/Divider";
import { FilterOption } from "./FilterOption/FilterOption";

export const SideFilterCard = (props) => {
  const {
    categoryTitle,
    category,
    addItemToFilterList,
    clearFilterList,
    deleteItemFromFilterList,
  } = props;

  const [isUnchecked, setIsUnchecked] = useState(false);

  // on "Clear all" button click, removes checked checkboxes and clears FilterList
  const clearHandler = () => {
    clearFilterList(categoryTitle);
    setIsUnchecked(true);
  };

  // when checkboxes are unchecked this function called for prevent isUnchecked
  const setToCheck = () => {
    setIsUnchecked(false);
  };

  return (
    <CardContainer styleName="card-container--shadow">
      <div className="side-filter-card">
        <div className="side-filter-card__header">
          <div className="side-filter-card__title"> {categoryTitle} </div>
          <Button
            className="side-filter-card__button"
            handleClick={clearHandler}
          >
            <div className="side-filter-card__button-text"> Clear all </div>
            <SVGIcon name="X" />
          </Button>
        </div>
        <Divider />
        <div className="side-filter-card__content">
          {category.map((title, index) => {
            return (
              <FilterOption
                key={index}
                title={title}
                categoryTitle={categoryTitle}
                addItemToFilterList={addItemToFilterList}
                deleteItemFromFilterList={deleteItemFromFilterList}
                unchecked={isUnchecked}
                setIsUnchecked={setToCheck}
              />
            );
          })}
        </div>
      </div>
    </CardContainer>
  );
};

SideFilterCard.propTypes = {
  categoryTitle: PropTypes.string,
  category: PropTypes.array,
  addItemToFilterList: PropTypes.func,
  clearFilterList: PropTypes.func,
  deleteItemFromFilterList: PropTypes.func,
};
