import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as StarE } from "assets/starEmpty.svg";
import { ReactComponent as User } from "assets/userIcon.svg";
import "./rating.scss";

export const Rating = ({ users, rating }) => (
  <>
    <div className="users">
      <User />
      {users}
    </div>
    <div className="box">
      <div className="rating">
        <div className="expand">
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
        <p>{rating}</p>
      </div>
    </div>
  </>
);

Rating.propTypes = {
  rating: PropTypes.string,
  users: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
};
