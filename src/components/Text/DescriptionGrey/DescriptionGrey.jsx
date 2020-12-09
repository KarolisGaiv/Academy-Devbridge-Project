import React from "react";
import PropTypes from "prop-types";
import "./description-grey.scss";

export const DescriptionGrey = (props) => (
  <span className={`description-grey ${props.descStyle}`}> {props.text} </span>
);

DescriptionGrey.propTypes = {
  text: PropTypes.string,
  descStyle: PropTypes.string,
};
