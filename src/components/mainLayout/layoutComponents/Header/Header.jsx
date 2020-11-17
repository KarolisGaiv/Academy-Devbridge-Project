import React from "react";
import "./header.scss";
import { ReactComponent as NotificationBell } from "../../../../assets/notification.svg";
import UserProfile from "../../../UserProfile/UserProfile";

const Header = () => {
  return (
    <header className="header">
      <div className="header__profile-widget">
        <UserProfile />
      </div>
      <div className="header__notification">
        <NotificationBell />
      </div>
    </header>
  );
};

export default Header;
