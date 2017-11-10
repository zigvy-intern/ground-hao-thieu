import React from 'react';
import {Button, Row, Col, Navbar, NavItem, Nav, NavDropdown, MenuItem, FormGroup, FormControl, Glyphicon, PageFooter, ResponsiveEmbed, Grid} from 'react-bootstrap';

const Layout = ({content}) => (
<Grid>
<Row>
<Col xs={12}>
<Navbar inverse>
  <Nav>
    <NavItem eventKey={1} href="#"><img src= "./publics/Images/logo.jpg"/>Logo insert here</NavItem>
  </Nav>
  <Nav>
    <Navbar.Form pullLeft>
      <FormGroup>
        <FormControl type="text"  placeholder="Search, grounds,teams or someone..." />
      </FormGroup>
      {' '}
      <Button type="submit" ><Glyphicon glyph= "search"></Glyphicon></Button>
    </Navbar.Form>
      <NavItem eventKey={1} href="#">Find Match</NavItem>
      <NavItem eventKey={2} href="#">Grounds</NavItem>
      <NavItem eventKey={3} href="#">Messages</NavItem>
      <NavItem eventKey={4} href="#">Upcoming</NavItem>
  </Nav>

  <Nav pullRight>
  <NavDropdown  title={
    <Col xs={6} md={4}>
      <Glyphicon glyph="user"></Glyphicon></Col>} id="basic-nav-dropdown" >
  <MenuItem eventKey={1} href="#"><Glyphicon glyph= "log-in"></Glyphicon> Login</MenuItem>
  <MenuItem eventKey={1} href="#"><Glyphicon glyph= "log-out"></Glyphicon> Logout </MenuItem>
  <MenuItem eventKey={1} href="#"><Glyphicon glyph= "setting"></Glyphicon> Setting </MenuItem>
  </NavDropdown>
  </Nav>
</Navbar>
</Col>
</Row>

  {content()}

</Grid>
);

export default Layout
