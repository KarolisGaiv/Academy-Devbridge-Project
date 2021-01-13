import React, { useState, useEffect } from "react";
import DatePicker from "react-date-picker";
import SVGIcon from "components/SVGIcon/SVGIcon";
import "./date-picker.scss";

const Calendar = () => {
  const [value, onChange] = useState();

  useEffect(() => {
    const setTabIndex = (queryName) => {
      var el = document.querySelector(queryName);
      if (el.value.length === 0) {
        el.setAttribute("tabindex", "-1");
      } else {
        el.removeAttribute("tabindex");
      }
    };
    setTabIndex(".react-date-picker__inputGroup__month");
    setTabIndex(".react-date-picker__inputGroup__day");
  });

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
