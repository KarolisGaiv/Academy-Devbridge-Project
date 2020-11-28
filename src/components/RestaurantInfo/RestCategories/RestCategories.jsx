import React from "react";
import PropTypes from "prop-types";
import SVGIcon from "../../SVGIcon/SVGIcon";
import "./rest-categories.scss";

export const RestCategories = ({ category }) => (
  <div className="box">
    <div className="categories">
      {[...Array(category[1] - 1)].map((star, i) => {
        return (
          <>
            <div className="categories__name" key={star}>
              {category[0][i]}
            </div>
            <SVGIcon name="ellipseGrey" className="ellipseGrey" />
          </>
        );
      })}
      <div className="categories__name"> {category[0][category[1] - 1]} </div>
    </div>
  </div>
);

RestCategories.propTypes = {
  category: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
};
