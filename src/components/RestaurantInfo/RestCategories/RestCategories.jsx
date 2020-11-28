import React from "react";
import PropTypes from "prop-types";
import SVGIcon from "../../SVGIcon/SVGIcon";
import "./rest-categories.scss";

export const RestCategories = ({ category }) => (
  <div className="categories">
    {[...Array(category[1] - 1)].map((name, i) => {
      return (
        <>
          <div className="categories__name" key={name}>
            {category[0][i]}
          </div>
          <SVGIcon name="ellipseGrey" className="ellipseGrey" />
        </>
      );
    })}
    <div className="categories__name"> {category[0][category[1] - 1]} </div>
  </div>
);

RestCategories.propTypes = {
  category: PropTypes.array,
  type: PropTypes.string,
  className: PropTypes.string,
};
