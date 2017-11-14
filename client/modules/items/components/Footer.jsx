import React from 'react';
import {Button, Row, Col, Navbar, NavItem, Nav, NavDropdown, MenuItem, FormGroup, FormControl, Glyphicon, PageFooter, ResponsiveEmbed, Grid} from 'react-bootstrap';

const Footer = ({content = () => null }) => (
  /*<Navbar>
  <Row>
  <Nav>
  <NavItem eventKey={1} href="#">Download App</NavItem>
  <NavItem eventKey={2} href="#">F.A.Q</NavItem>
  <NavItem eventKey={3} href="#">Support</NavItem>
  <NavItem eventKey={4} href="#">Feedback</NavItem>
  </Nav>
  <Nav pullRight>
  <MenuItem eventKey={1} href="#"><Glyphicon glyph= "envelope"></Glyphicon></MenuItem>
  <MenuItem eventKey={2} href="#"><Glyphicon glyph= "earphone"></Glyphicon></MenuItem>
  </Nav>
  </Row>

  <p> © 2017 Zigvy Inc </p>
  </Navbar>*/

  <Grid>
    <Row>
    <Col sm={4} xs={4}>
      <p> Span 1 </p>
    </Col>
    <Col sm={5} xs={5}>
      <p> Span 2 </p>
    </Col>
    <Col sm={3} xs={3}>
      <p> Span 3 </p>
    </Col>
    </Row>
  </Grid>
);
export default Footer;
