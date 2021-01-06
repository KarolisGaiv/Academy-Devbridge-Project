import React, { useState } from "react";
import DatePicker from "react-date-picker";
import SVGIcon from "components/SVGIcon/SVGIcon";
import "./date-picker.scss";

const Calendar = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className="wrapper">
      <DatePicker
        onChange={onChange}
        value={value}
        calendarIcon={<SVGIcon name="calendar" />}
        prevLabel={<SVGIcon name="buttonArrow" />}
        nextLabel={<SVGIcon name="buttonArrow" />}
        locale="en-GB"
      />
    </div>
  );
};

export default Calendar;
