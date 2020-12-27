import React from "react";
import PropTypes from "prop-types";
import "./link.scss";

export const Link = ({ styleName, path, handleClick, children }) => (
  <a className={`link ${styleName}`} href={path} onClick={handleClick}>
    {children}
  </a>
);

Link.propTypes = {
  styleName: PropTypes.string,
  path: PropTypes.string,
  handleClick: PropTypes.func,
  children: PropTypes.string,
};
