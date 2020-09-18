import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function MyCalendar() {
    const [value, setValue] = useState(new Date());
    function onChange(nextValue) {
      setValue(nextValue);
    }
    return (
      <Calendar
        onChange={onChange}
        value={value}
      />
    );
  }  
  export default MyCalendar;