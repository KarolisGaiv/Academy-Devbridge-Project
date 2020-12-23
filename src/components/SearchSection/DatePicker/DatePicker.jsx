import React, { useState } from "react";
import "./date-picker.scss";

const Calendar = () => {
  const [date, setDate] = useState(new Date().toISOString().substr(0, 10));

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  return (
    <div className="wrapper">
      <span className="wrapper__header">select date</span>
      <div className="calendar-wrapper">
        <input
          type="date"
          className="calendar-wrapper__calendar-field"
          value={date}
          onChange={handleDateChange}
        />
      </div>
    </div>
  );
};

export default Calendar;
