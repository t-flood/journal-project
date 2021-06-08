import React from "react";
import "react-datetime/css/react-datetime.css";
import Datetime from "react-datetime";

export default function App() {
  return <MyDTPicker />;
}

class MyDTPicker extends React.Component {
  render() {
    return (
      <Datetime
        renderDay={this.renderDay}
        renderMonth={this.renderMonth}
        renderYear={this.renderYear}
      />
    );
  }
  renderDay(props, currentDate, selectedDate) {
    // Adds 0 to the days in the days view
    return <td {...props}>{"0" + currentDate.date()}</td>;
  }
  renderMonth(props, month, year, selectedDate) {
    // Display the month index in the months view
    return <td {...props}>{month}</td>;
  }
  renderYear(props, year, selectedDate) {
    // Just display the last 2 digits of the year in the years view
    return <td {...props}>{year % 100}</td>;
  }
}
