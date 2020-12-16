import React from "react";
import PropTypes from "prop-types";
import "./filter-option.scss";
import SVGIcon from "components/SVGIcon/SVGIcon";

export const FilterOption = ({ title }) => {
  return (
    <div className="filter-option">
      <label className="checkbox">
        <input type="checkbox" id={title} className="checkbox__original" />
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
};
