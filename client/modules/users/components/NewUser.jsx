import React from 'react';
import { Col, ControlLabel, Panel, Input,FormGroup, FormControl, Button, Glyphicon, OverlayTrigger, Tooltip} from 'react-bootstrap';

class NewUser extends React.Component {
  render() {
      const {error} = this.props;
      return (
        <div>
          <Col xs={12} sm={6} smOffset={3}>
            <Panel>
              <h1>Register</h1>
              {error ? <p style={{color: 'red'}}>{error}</p> : null}
              <form>
                <FormGroup>
                <FormControl inputRef={mail => this.refMail = mail} type="email" placeholder="Email" />
                <br/>
                <FormControl inputRef={password => this.refPass = password} type="password" placeholder="Password" />
                <br/>
                <FormGroup controlId="formControlsSelect">
                <ControlLabel>I am</ControlLabel>
                <FormControl componentClass="select" placeholder="select">
                <OverlayTrigger placement="bottom" overlay= '<Tooltip id="tooltip"><strong>Holy guacamole!</strong> Check this info.</Tooltip>'>
                <option value="select">Ground Owner</option>
                </OverlayTrigger>
                <option value="other">User</option>
                </FormControl>
                </FormGroup>
                <br/>
                <Button onClick={this.create.bind(this)}
                bsStyle="primary" type="submit" >Sign up </Button>

                </FormGroup>
              </form>
            </Panel>
          </Col>
        </div>
      )
    }

    create(e) {
      e.preventDefault();
      const {createUser} = this.props;
      const mail = this.refMail.value;
      const password = this.refPass.value;
      createUser(mail,password);
    }
}
export default NewUser;
