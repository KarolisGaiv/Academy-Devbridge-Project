import React from "react";
import "./side-filters.scss";
import PropTypes from "prop-types";
import { SideFilterCard } from "./SideFilterCard/SideFilterCard";

export const SideFilters = (props) => {
  const {
    filterCategories,
    addItemToFilterList,
    clearFilterList,
    deleteItemFromFilterList,
  } = props;

  return (
    <div className="side-filters">
      {Object.keys(filterCategories).map((key, index) => {
        return (
          <SideFilterCard
            key={index}
            categoryTitle={key}
            category={filterCategories[key]}
            addItemToFilterList={addItemToFilterList}
            clearFilterList={clearFilterList}
            deleteItemFromFilterList={deleteItemFromFilterList}
          />
        );
      })}
    </div>
  );
};

SideFilters.propTypes = {
  filterCategories: PropTypes.object,
  addItemToFilterList: PropTypes.func,
  clearFilterList: PropTypes.func,
  deleteItemFromFilterList: PropTypes.func,
};
