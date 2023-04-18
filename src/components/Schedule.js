import React from "react";
import PropTypes from "prop-types";
import { Form, FormGroup, FormControl } from "react-bootstrap";

function Schedule(props) {
  return (
    <React.Fragment>
      <Form>
        <FormGroup>
          <FormControl type="text" placeholder={props.day} />
        </FormGroup>
        <FormGroup>
          <FormControl type="text" placeholder={props.location} />
        </FormGroup>
        <FormGroup>
          <FormControl type="text" placeholder={props.hours} />
        </FormGroup>
        <FormGroup>
          <FormControl type="text" placeholder={props.booth} />
        </FormGroup>
      </Form>
    </React.Fragment>
  );
}

Schedule.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string.isRequired
}

export default Schedule;