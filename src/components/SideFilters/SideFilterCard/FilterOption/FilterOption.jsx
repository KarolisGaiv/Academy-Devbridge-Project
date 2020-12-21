import React from "react";
import PropTypes from "prop-types";
import "./filter-option.scss";
import SVGIcon from "components/SVGIcon/SVGIcon";

export const FilterOption = (props) => {
  const {
    title,
    categoryTitle,
    unchecked,
    setIsUnchecked,
    addItemToFilterList,
    deleteItemFromFilterList,
  } = props;
  const clickHandler = (event) => {
    event.target.checked
      ? addItemToFilterList(categoryTitle, title)
      : deleteItemFromFilterList(categoryTitle, title);
  };

  if (unchecked) setIsUnchecked();

  return (
    <div className="filter-option">
      <label className="checkbox">
        <input
          type="checkbox"
          id={title}
          className="checkbox__original"
          onClick={clickHandler}
          checked={unchecked ? false : null}
        />
        <span className="checkbox__custom" />
        <span className="checkbox__check">
          <SVGIcon name="check" />
        </span>
        <label htmlFor={title} className="checkbox__text">
          {title}
        </label>
      </label>
    </div>
  );
};

FilterOption.propTypes = {
  title: PropTypes.string,
  categoryTitle: PropTypes.string,
  unchecked: PropTypes.bool,
  setIsUnchecked: PropTypes.func,
  addItemToFilterList: PropTypes.func,
  deleteItemFromFilterList: PropTypes.func,
};
