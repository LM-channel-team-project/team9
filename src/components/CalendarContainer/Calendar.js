import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { CalendarBox } from "./Calendar.style";

const CalendarContainer = () => {
  const [value, onChange] = useState(new Date());

  return (
    <CalendarBox>
      <Calendar
        onChange={() => onChange(new Date())}
        value={value}
        className="calendar"
      />
    </CalendarBox>
  );
};

export default CalendarContainer;
