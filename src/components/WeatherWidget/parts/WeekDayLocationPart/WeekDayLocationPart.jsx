import React from "react";
import PropTypes from "prop-types";
import "./week-day-location-part.scss";

const WeekDayLocationPart = ({ weekDay, location }) => {
  let newDate = new Date();
  let date = newDate.getDate();
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

  return (
    <div className="place">
      <div className="place__week-day">
        {weekDay}, {date} {month}
      </div>
      <div className="place__divider">|</div>
      <div className="place__location">{location}</div>
    </div>
  );
};

export default WeekDayLocationPart;

WeekDayLocationPart.propTypes = {
  weekDay: PropTypes.string,
  location: PropTypes.string,
};
