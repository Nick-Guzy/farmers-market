import React from "react";
import ScheduleList from "./ScheduleList";

class ScheduleControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // formVisibleOnPage: true,
      selectedDay: null
    };
    this.handleDaySelection = this.handleDaySelection.bind(this);
  }

handleDaySelection(day) {
  this.setState({
    selectedDay: day
  });
};

render() {
  return (
    <React.Fragment>
      <div>
        <h2>Select a day</h2>
        <button onClick={() => this.handleDaySelection("Sunday")}>Sunday</button>
        <button onClick={() => this.handleDaySelection("Monday")}>Monday</button>
        <button onClick={() => this.handleDaySelection("Tuesday")}>Tuesday</button>
        <button onClick={() => this.handleDaySelection("Wednesday")}>Wednesday</button>
        <button onClick={() => this.handleDaySelection("Thursday")}>Thursday</button>
        <button onClick={() => this.handleDaySelection("Friday")}>Friday</button>
        <button onClick={() => this.handleDaySelection("Saturday")}>Saturday</button>
      </div>
      <ScheduleList selectedDay={this.state.selectedDay}/>
    </React.Fragment>
    );
  }
}

export default ScheduleControl;

