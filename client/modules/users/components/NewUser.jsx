import React from 'react';
import { Col, Panel, Input,FormGroup, FormControl, Button, Glyphicon } from 'react-bootstrap';

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
