import React from 'react';
import {Button, Modal, ButtonGroup, Glyphicon} from 'react-bootstrap';
import DateTimeField from 'react-bootstrap-datetimepicker';

class ModalBookingStep3 extends React.Component {
  render() {
    /*let close = () => this.setState({ show: false });*/

    return (
      <div>
            <DateTimeField mode="date" />
            <DateTimeField mode="time" />
      </div>
    );
  }
}

export default ModalBookingStep3;
