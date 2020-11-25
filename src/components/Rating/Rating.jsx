import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as StarE } from "assets/starEmpty.svg";
import "./rating.scss";

export const Rating = ({ rating }) => (
  <div className="box">
    <div className="rating">
      <div className="rating__expand">
        <span>
          <StarE></StarE>
        </span>
        <span>
          <StarE></StarE>
        </span>
        <span>
          <StarE></StarE>
        </span>
        <span>
          <StarE></StarE>
        </span>
        <span>
          <StarE></StarE>
        </span>
      </div>
      {rating}
    </div>
  </div>
);

Rating.propTypes = {
  rating: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
};
