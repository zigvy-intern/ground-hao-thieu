import React from 'react';
import {Button, Thumbnail, Row, Col, Navbar, MenuItem, Form, FormGroup, FormControl, ControlLabel, Glyphicon, ResponsiveEmbed, Grid} from 'react-bootstrap';

class HomePage extends React.Component {
  render() {
    return(
    <div>
    <Row>
    <Col md={12} lg={12}>
    <Form inline>
    <FormGroup>
    <h4> Grounds </h4>
    </FormGroup>
    {' '}
    <FormGroup controlId="formControlsSelect">
    <FormControl componentClass="select" placeholder="select">
      <option value="Select">Nearest</option>
      <option value="other">Farest</option>
    </FormControl>
    </FormGroup>
    {' '}
    <FormGroup controlId="formControlsSelect">
      <FormControl componentClass="select" placeholder="select">
        <option value="select">Price Range</option>
        <option value="other">...</option>
      </FormControl>
    </FormGroup>
    {' '}
    <FormGroup controlId="formControlsSelect">
      <FormControl componentClass="select" placeholder="select">
        <option value="select">Available Only</option>
        <option value="other">...</option>
      </FormControl>
    </FormGroup>

    <Navbar.Form pullRight>
    <FormGroup>
        <FormControl type="text" placeholder="Search" />
    </FormGroup>
    </Navbar.Form>

    </Form>
    </Col>
    </Row>
    <Row>
      <Col xs={6} md={4}>
        <Thumbnail ><a href="http://localhost:3000/Detail"><img src="http://stadiumdb.com/pic-projects/stamford_bridge/stamford_bridge08.jpg" style={{width:"335",height:"250"}} alt="240x200" /></a>
          <h3>Thumbnail label</h3>
          <p>Description</p>

        </Thumbnail>
      </Col>
      <Col xs={6} md={4}>
        <Thumbnail><a href=""><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/The_Santiago_Bernabeu_Stadium_-_U-g-g-B-o-y.jpg/1200px-The_Santiago_Bernabeu_Stadium_-_U-g-g-B-o-y.jpg" style={{width:"335",height:"250"}}  alt="240x200" /></a>
          <h3>Thumbnail label</h3>
          <p>Description</p>

        </Thumbnail>
      </Col>
      <Col xs={6} md={4}>
        <Thumbnail><a href=""><img src="https://upload.wikimedia.org/wikipedia/commons/4/43/Old_Trafford_inside_20060726_1.jpg"  style={{width:"335",height:"250"}}  alt="240x200" /></a>
          <h3>Thumbnail label</h3>
          <p>Description</p>

        </Thumbnail>
      </Col>
    </Row>
    <Row>
      <Col xs={6} md={4}>
        <Thumbnail><a href=""><img src="https://i2-prod.mirror.co.uk/incoming/article10949786.ece/ALTERNATES/s1200/Liverpool-FCs-new-pitch-at-Anfield.jpg"  style={{width:"335",height:"250"}}  alt="240x200" /></a>
          <h3>Thumbnail label</h3>
          <p>Description</p>

        </Thumbnail>
      </Col>
      <Col xs={6} md={4}>
        <Thumbnail><a href=""><img src="http://events.arsenal.com/assets/slide186.jpg"  style={{width:"335",height:"250"}}  alt="240x200" /></a>
          <h3>Thumbnail label</h3>
          <p>Description</p>
        </Thumbnail>
      </Col>
      <Col xs={6} md={4}>
        <Thumbnail><a href=""><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/2014._Camp_Nou._M%C3%A9s_que_un_club._Barcelona_B40.jpg/1200px-2014._Camp_Nou._M%C3%A9s_que_un_club._Barcelona_B40.jpg"  style={{width:"335",height:"250"}}  alt="240x200" /></a>
          <h3>Thumbnail label</h3>
          <p>Description</p>

        </Thumbnail>
      </Col>
    </Row>

</div>
)
}
}

export default HomePage;
