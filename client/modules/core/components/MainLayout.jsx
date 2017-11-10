import React from 'react';
import {Button, Row, Col, Navbar, NavItem, Nav, NavDropdown, MenuItem, FormGroup, FormControl, Glyphicon, PageFooter, ResponsiveEmbed, Grid} from 'react-bootstrap';

const Layout = ({content}) => (
  <Navbar inverse>
  <Nav>
  <NavItem eventKey={1} href="#"><img src= "https://www.google.com.vn/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwiW-4_W97LXAhVMu48KHeSbClMQjRwIBw&url=http%3A%2F%2Fwww.vectortemplates.com%2Fraster-batman.php&psig=AOvVaw1QqaZWjsoiICnp7_dMX2zg&ust=1510366452366159" width= "50px" height= "20px"/></NavItem>
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
);
export default Layout
