import React from 'react';
import {Button, Modal, ButtonGroup, Glyphicon} from 'react-bootstrap';
import DateTimeField from 'react-bootstrap-datetimepicker';

class ModalBookingStep1 extends React.Component {
  render() {
    return (
      <div>
        <p> Pick day and time </p>
        <DateTimeField mode="date" />
        <br/>
        <DateTimeField mode="time" />
      </div>
    );
  }
}

export default ModalBookingStep1;
