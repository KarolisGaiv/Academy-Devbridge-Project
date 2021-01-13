import React, { useState } from "react";
import DatePicker from "react-date-picker";
import SVGIcon from "components/SVGIcon/SVGIcon";
import "./date-picker.scss";

const Calendar = () => {
  const [value, onChange] = useState();
  const today = new Date();

  return (
    <div className="wrapper">
      <DatePicker
        onChange={onChange}
        value={value}
        calendarIcon={<SVGIcon name="calendar" />}
        prevLabel={<SVGIcon name="buttonArrow" />}
        nextLabel={<SVGIcon name="buttonArrow" />}
        locale="en-GB"
        format="y MM dd"
        dayPlaceholder={today.getDate()}
        monthPlaceholder={today.getMonth().toLocaleString() + 1}
        yearPlaceholder={today.getFullYear()}
        defaultActiveStartDate={today}
      />
    </div>
  );
};

export default Calendar;
