import React from 'react';
import {Button, Row, Col, Navbar, MenuItem, Form, FormGroup, FormControl, ControlLabel, Glyphicon, ResponsiveEmbed, Grid} from 'react-bootstrap';

const HomePage = ({content = () => null }) => (
  <Grid>
    <Row>
    <Col md={12} lg={10}>
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
    {' '}
    <FormGroup>
        <FormControl type="text" placeholder="Search" autofocus="autofocus" />
    </FormGroup>
    </Form>
    </Col>
    </Row>
    <br></br>
    <Row>
      <Col xs={6} md={4}>
        <p> IMG1 </p>
      </Col>
      <Col xs={6} md={4}>
        <p> IMG2 </p>
      </Col>
      <Col xs={6} md={4}>
        <p> IMG3 </p>
      </Col>
    </Row>
  </Grid>
);

export default HomePage;
