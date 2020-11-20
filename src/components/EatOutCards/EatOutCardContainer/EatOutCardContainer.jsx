import React from "react";
import PropTypes from "prop-types";
import "./eat-out-card-container.scss";

export const EatOutCardContainer = (props) => {
  const { children } = props;

  return (
    <>
      <div className="eat-out-card">{children}</div>
    </>
  );
};

EatOutCardContainer.propTypes = {
  children: PropTypes.object,
};
