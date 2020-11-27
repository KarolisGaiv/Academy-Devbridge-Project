import React from "react";
import PropTypes from "prop-types";
import "./week-day-location-part.scss";

const WeekDayLocationPart = ({ location }) => {
  let newDate = new Date();
  let date = newDate.getDate();
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = months[newDate.getMonth()];
  const day = days[newDate.getDay() - 1];
  return (
    <div className="place">
      <div className="place__week-day">
        {day}, {date} {month}
      </div>
      <div className="place__divider">|</div>
      <div className="place__location">{location}</div>
    </div>
  );
};

export default WeekDayLocationPart;

WeekDayLocationPart.propTypes = {
  location: PropTypes.string,
};
