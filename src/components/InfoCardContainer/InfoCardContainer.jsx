import React from "react";
import PropTypes from "prop-types";
import "./info-card-container.scss";

export const InfoCardContainer = (props) => {
  return (
    <>
      <div className={`info-card ${props.styleName}`}>{props.children}</div>
    </>
  );
};

InfoCardContainer.propTypes = {
  styleName: PropTypes.string,
  children: PropTypes.object,
};
