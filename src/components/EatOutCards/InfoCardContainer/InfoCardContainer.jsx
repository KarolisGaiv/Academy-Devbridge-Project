import React from "react";
import PropTypes from "prop-types";
import "./info-card-container.scss";

export const InfoCardContainer = (props) => {
  const { children } = props;

  return (
    <>
      <div className="info-card">{children}</div>
    </>
  );
};

InfoCardContainer.propTypes = {
  children: PropTypes.object,
};
