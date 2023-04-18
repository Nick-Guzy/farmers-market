import React from "react";
import ScheduleList from "./ScheduleList";

class ScheduleControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: true
    };
  }
function MylistComponents(props) {
  const items = props.marketSchedule;

  return (
    {items.map((element) => ( 
      <ScheduleList key={element.}/>
  ))}
}

  render(){
    let currentlyVisibleState = null;
    if (this.state.formVisibleOnPage) {

    } else {
      currentlyVisibleState = <ScheduleList />
    }
      return (
        <React.Fragment>
          {currentlyVisibleState}
        </React.Fragment>
      );
  }
}

export default ScheduleControl;