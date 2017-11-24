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
    switch (this.state.step) {
      case 1:
        modalContent = <ModalBookingStep1 />
        handleButton = (
          <Button onClick={() => this.changeStepView(2)}>
            Step 2
          </Button>
        )
        break;
      case 2:
        modalContent = <ModalBookingStep2 />
        handleButton = (
          <Button onClick={() => this.changeStepView(3)}>
            Step 3
          </Button>
        )
        break;
      case 3:
        modalContent = <ModalBookingStep3 />
        handleButton = (
          <Button onClick={() => this.submitBooking()}>
            Finish
          </Button>
        )
        break;
      default:

    }
    return (
      <Modal show={this.props.show} >
        <Modal.Header>
          <Modal.Title id="contained-modal-title">Step 1</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalContent}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => this.changeStepView(2)}>
            Step 2
          </Button>

        </Modal.Footer>
      </Modal>
    );
  }
}

export default ModalBooking;
