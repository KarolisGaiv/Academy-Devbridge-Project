import React from "react";
import PropTypes from "prop-types";
import "./link.scss";

export const Link = ({ styleName, path, children }) => (
  <a className={`link ${styleName}`} href={path}>
    {children}
  </a>
);

Link.propTypes = {
  styleName: PropTypes.string,
  path: PropTypes.string,
  children: PropTypes.string,
};
