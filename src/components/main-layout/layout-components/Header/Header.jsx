import React from "react";
import "./header.scss";
import { ReactComponent as NotificationBell } from "../../../../assets/notification.svg";
import ProfileWidget from "./ProfileWidget/ProfileWidget";

const Header = () => {
  return (
    <header className="header">
      <div className="header__profile-widget">
        <ProfileWidget />
      </div>
      <div className="header__notification">
        <NotificationBell />
      </div>
    </header>
  );
};

export default Header;
