import React from "react";
import "./header.scss";
import SVGIcon from "../../../SVGIcon/SVGIcon";
import UserProfile from "../../../UserProfile/UserProfile";
import PropTypes from "prop-types";

const Header = ({ notification }) => {
  return (
    <header className="header">
      <div className="header__profile-widget">
        <UserProfile />
      </div>
      <div className="header__notification">
        {notification ? (
          <SVGIcon name="checkedNotificationBell" />
        ) : (
          <SVGIcon name="notificationBell" />
        )}
      </div>
    </header>
  );
};

export default Header;

Header.propTypes = {
  notification: PropTypes.bool,
};
