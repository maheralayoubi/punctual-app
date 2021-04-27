import React, { useEffect, useState } from "react";
// import Calendar from "react-calendar";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";
import { format } from "date-fns";
import { enGB } from "date-fns/locale";
import { DatePickerCalendar } from "react-nice-dates";
import "react-nice-dates/build/style.css";

function Calander() {
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState();

  useEffect(() => {
    const interval = setInterval(() => setDate(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <div className="d-flex justify-content-around">
        <h1>Hey Maher!</h1>
        <Clock
          value={date}
          hourHandLength={40}
          hourHandOppositeLength={10}
          hourHandWidth={4}
          hourMarksLength={20}
          hourMarksWidth={5}
          minuteHandLength={70}
        />
      </div>
      <div>
        {/* <Calendar onChange={setDate} value={date} /> */}
        <p>
          Selected date:{" "}
          {selectedDate
            ? format(selectedDate, "dd MMM yyyy", { locale: enGB })
            : "none"}
          .
        </p>
        <DatePickerCalendar
          date={selectedDate}
          onDateChange={setSelectedDate}
          locale={enGB}
        />
      </div>
    </div>
  );
}

export default Calander;
