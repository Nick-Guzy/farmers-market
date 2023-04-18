import React from "react";
import ProduceList from "./ProduceList";

class ProduceControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    selectedMonth: null
    };
    this.handleMonthSelection = this.handleMonthSelection.bind(this);
  }

handleMonthSelection(Month) {
  console.log(`Selected month: ${Month}`);
  this.setState({
    selectedMonth: Month
  });
};

render() {
  return (
    <React.Fragment>
      <div>
        <h2>Select a Month</h2>
        <button onClick={() => this.handleMonthSelection("January")}>January</button>
        <button onClick={() => this.handleMonthSelection("February")}>February</button>
        <button onClick={() => this.handleMonthSelection("March")}>March</button>
        <button onClick={() => this.handleMonthSelection("April")}>April</button>
        <button onClick={() => this.handleMonthSelection("May")}>May</button>
        <button onClick={() => this.handleMonthSelection("June")}>June</button>
        <button onClick={() => this.handleMonthSelection("July")}>July</button>
        <button onClick={() => this.handleMonthSelection("August")}>August</button>
        <button onClick={() => this.handleMonthSelection("October")}>October</button>
        <button onClick={() => this.handleMonthSelection("September")}>September</button>
        <button onClick={() => this.handleMonthSelection("November")}>November</button>
        <button onClick={() => this.handleMonthSelection("December")}>December</button>
      </div>
      
      <ProduceList selectedMonth={this.state.selectedMonth}/>
    </React.Fragment>
    );
  }
}

export default ProduceControl;