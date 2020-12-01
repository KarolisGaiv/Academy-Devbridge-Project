import React from "react";
import PropTypes from "prop-types";
import "./card.scss";

const Card = (props) => {
  return <div className="card">{props.children}</div>;
};

export default Card;

Card.propTypes = {
  children: PropTypes.array,
};
