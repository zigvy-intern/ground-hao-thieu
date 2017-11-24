import React from 'react';
import { Col, Input, FormGroup, Panel, FormControl, Button, Glyphicon, ToggleButton, ToggleButtonGroup, ButtonToolbar, Nav} from 'react-bootstrap';

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
                <FormControl inputRef={name => this.refName = name} type="name" placeholder="Your Name" />
                <br/>
                <FormControl inputRef={phoneNumber => this.refPhoneNumber = phoneNumber} type="phoneNumber" placeholder="Phone Number" />
                <br/>
                <FormGroup controlId="formControlsSelect">
                <ButtonToolbar>
                <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                  <ToggleButton value={1}>I'm an User</ToggleButton>
                  <ToggleButton value={2}>I'm a Ground Owner</ToggleButton>
                </ToggleButtonGroup>
                </ButtonToolbar>
                <br/>
                <Button onClick={this.create.bind(this)}
                bsStyle="primary" type="submit" >Sign up </Button>
                </FormGroup>
                <br/>


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
