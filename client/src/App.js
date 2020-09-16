import React, { useState } from 'react';
import './App.css';

// ** Calendar **
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function MyApp() {
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
export default MyApp;
// ** End Calendar **