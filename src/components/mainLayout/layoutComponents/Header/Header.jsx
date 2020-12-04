import React from "react";
import "./header.scss";
import SVGIcon from "../../../SVGIcon/SVGIcon";
import UserProfile from "../../../UserProfile/UserProfile";

const Header = () => {
  return (
    <header className="header">
      <div className="header__profile-widget">
        <UserProfile />
      </div>
      <div className="header__notification">
        <SVGIcon name="notificationBell" />
      </div>
    </header>
  );
};

export default Header;
