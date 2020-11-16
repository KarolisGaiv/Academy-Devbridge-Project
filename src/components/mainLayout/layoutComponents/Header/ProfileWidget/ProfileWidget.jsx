import React from "react";
import "./profileWidget.scss";
import UserProfile from "../../../../User_Profile/User_Profile";

const ProfileWidget = () => {
  return (
    <div className="profile-widget">
      <div className="profile-widget__placeholder">
        <UserProfile />
      </div>
    </div>
  );
};

export default ProfileWidget;
