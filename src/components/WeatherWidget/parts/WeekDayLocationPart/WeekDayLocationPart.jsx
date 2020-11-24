import React from "react";
import PropTypes from "prop-types";
import "./week-day-location-part.scss";

const WeekDayLocationPart = ({ weekDay, location }) => {
  let newDate = new Date();
  let date = newDate.getDate();
  let month;
  switch (newDate.getMonth()) {
    case 0:
      month = "January";
      break;
    case 1:
      month = "February";
      break;
    case 2:
      month = "March";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
      break;
    case 7:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "October";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "December";
      break;
    default:
  }

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
