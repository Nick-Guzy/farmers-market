import React from "react";
import PropTypes from "prop-types";
import Table from 'react-bootstrap/Table';


function ProduceTable(props) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr> 
          <th>Selection</th>
        </tr>
      </thead>
      <tbody>
        {props.selection.map((item, index) => (
          <tr key={index}>
            <td>{item}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

ProduceTable.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProduceTable;