import React, { useState, useEffect } from "react";
import DatePicker from "react-date-picker";
import SVGIcon from "components/SVGIcon/SVGIcon";
import "./date-picker.scss";

const Calendar = () => {
  const [value, onChange] = useState();

  useEffect(() => {
    document
      .querySelector(".react-date-picker__inputGroup__month")
      .setAttribute("tabindex", "-1");
    document
      .querySelector(".react-date-picker__inputGroup__day")
      .setAttribute("tabindex", "-1");
  }, []);

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
        yearPlaceholder="Choose a date"
        monthPlaceholder=""
        dayPlaceholder=""
        clearIcon={value ? <SVGIcon name="cancel" /> : null}
      />
    </div>
  );
};

export default Calendar;
