import React from "react";
import PropTypes from "prop-types";
import SVGIcon from "../../SVGIcon/SVGIcon";
import "./rest-categories.scss";

export const RestCategories = ({ category }) => (
  <div className="categories">
    {[...Array(category[3] - 1)].map((name, i) => {
      return (
        <>
          <div className="categories__name" key={name}>
            {category[2][i]}
          </div>
          <div className="categories__icon">
            <SVGIcon name="ellipseGrey" />
          </div>
        </>
      );
    })}
    <div className="categories__name"> {category[2][category[3] - 1]} </div>
  </div>
);

RestCategories.propTypes = {
  category: PropTypes.array,
  type: PropTypes.string,
  className: PropTypes.string,
};
