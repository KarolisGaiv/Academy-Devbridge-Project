import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as User } from "assets/userIcon.svg";
import "./check-ins.scss";

export const CheckIns = ({ checkins }) => (
  <div className="users">
    <User />
    {checkins}
  </div>
);

CheckIns.propTypes = {
  checkins: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
};
