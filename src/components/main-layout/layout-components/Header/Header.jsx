import React from "react";
import "./Header.scss";
import { ReactComponent as NotificationBell } from "../../../../assets/notification.svg";
import ProfileWidget from "./ProfileWidget/ProfileWidget";

const Header = () => {
  return (
    <header className="header">
      <div className="header__profileWidget">
        <ProfileWidget />
      </div>
      <div className="header__notification">
        <NotificationBell />
      </div>
    </header>
  );
};

export default Header;
