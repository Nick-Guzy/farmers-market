import React from "react";
import PropTypes from "prop-types";

function Produce(props) {
  return (
    <React.Fragment>
      <h3>{props.month}</h3>

      {props.selection.map((item, index) => (
        <h3 key={index}> {item} </h3>
      ))}
    </React.Fragment>
  );
}

Produce.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Produce;