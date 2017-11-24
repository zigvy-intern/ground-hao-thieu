import React, { Component } from 'react';
import {Button, Modal, ButtonGroup, Glyphicon} from 'react-bootstrap';
import ModalBookingStep1 from './modal.booking.step1';
import ModalBookingStep2 from './modal.booking.step2';
import ModalBookingStep3 from './modal.booking.step3';

class ModalBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
    }
    this.changeStepView = this.changeStepView.bind(this);
  }

  changeStepView(step) {
    this.setState({step});
  }

  submitBooking(){

  }

  render() {
    let modalContent = null;
    let handleButton = null;
    let modalTitle = null;
    switch (this.state.step) {
      case 1:
        modalTitle = (
          <h3> Book your Match </h3>
        )
        modalContent = <ModalBookingStep1 />
        handleButton = (
          <Button
          bsStyle="primary"
          onClick={() => this.changeStepView(2)}>
            Next
          </Button>
        )
        break;
      case 2:
        modalTitle = (
          <h3> Complete </h3>
        )
        modalContent = <ModalBookingStep2 />
        handleButton = (
          <div>
          <a href="#"> Invite Team </a>
          {' '}
          <Button
          bsStyle="primary"
          onClick={() => this.submitBooking()}>
            Finish
          </Button>
          </div>
        )
        break;
      default:
    }
    return (
      <Modal show = {this.props.show}>
        <Modal.Header>
          {modalTitle}
        </Modal.Header>
        <Modal.Body>
          {modalContent}
        </Modal.Body>
        <Modal.Footer>
          {handleButton}
        </Modal.Footer>
      </Modal>
    )
  }
}

export default ModalBooking;
