import React from "react";
import Notification_Icon from "./Notification_Icon";
import { ReactComponent as NotificationBell } from "assets/notification_Bell.svg";

export default {
  title: "Components/ Notification Icon",
  component: Notification_Icon,
};

export const Regular = () => (
  <div>
    {" "}
    <NotificationBell />{" "}
  </div>
);
