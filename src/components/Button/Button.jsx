import React from "react";
import PropTypes from "prop-types";
import "./button.scss";

export const Button = ({
  children,
  className,
  typeName,
  handleClick,
  tabIndex,
}) => (
  <button
    className={className}
    type={typeName}
    onClick={handleClick}
    tabIndex={tabIndex}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  typeName: PropTypes.string,
  className: PropTypes.string,
  handleClick: PropTypes.func,
  tabIndex: PropTypes.number,
};
