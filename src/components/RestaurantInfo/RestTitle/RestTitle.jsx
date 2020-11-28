import React from "react";
import PropTypes from "prop-types";
import "./rest-title.scss";

export const RestTitle = ({ title }) => (
  <div className="title">
    <div className="title__text">{title}</div>
  </div>
);

RestTitle.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
};
