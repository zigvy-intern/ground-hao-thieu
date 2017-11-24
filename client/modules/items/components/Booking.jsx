import React from 'react';
import {Button, Modal, ButtonGroup, Glyphicon} from 'react-bootstrap';
import ModalBooking from '../../booking/components/modal.booking.jsx';

class BookingStep extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      toggleModal: false,
    }
  }

  render() {
    let close = () => this.setState({ show: false });
    return (
      <div className="modal-container" style={{ height: 200 }}>
        <ButtonGroup>
        <Button
          bsStyle="primary"
          onClick={() => this.setState({ show: true })}
        >
        BOOK NOW!
        </Button>

        <ModalBooking show = {this.state.show} />
        
        <Button>
        <Glyphicon glyph="star-empty"> Favorite</Glyphicon>
        </Button>
        <Button>
        <Glyphicon glyph="share"> Share</Glyphicon>
        </Button>
        </ButtonGroup>

      </div>
    );
  }
}

export default BookingStep;
