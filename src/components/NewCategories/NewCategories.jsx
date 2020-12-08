import React from "react";
import PropTypes from "prop-types";
import "./new-categories.scss";

export const NewCategories = ({ categories }) => {
  return (
    <ul className="categories">
      {categories.map((category, i) => (
        <li className="categories__item" key={i}>
          {category}
        </li>
      ))}
    </ul>
  );
};

NewCategories.propTypes = {
  categories: PropTypes.array,
};
