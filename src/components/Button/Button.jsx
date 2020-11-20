import React from "react";
import PropTypes from "prop-types";
import "./button.scss";

export const Button = ({ children, className, handleClick }) => (
  <button className={className} type="submit" onClick={handleClick}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  handleClick: PropTypes.func,
};
