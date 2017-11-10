import React from 'react';
import {Button, Row, Col, Navbar, NavItem, Nav, NavDropdown, MenuItem, FormGroup, FormControl, Glyphicon, PageFooter, ResponsiveEmbed, Grid} from 'react-bootstrap';

const ItemList = ({content = () => null }) => (
<Navbar>
<Row>
<Nav pullRight>
<MenuItem eventKey={1} href="#"><Glyphicon glyph= "envelope"></Glyphicon></MenuItem>
<MenuItem eventKey={2} href="#"><Glyphicon glyph= "earphone"></Glyphicon></MenuItem>
</Nav>

<Nav pullLeft>
<NavItem eventKey={1} href="#">Download App</NavItem>
<NavItem eventKey={2} href="#">F.A.Q</NavItem>
<NavItem eventKey={3} href="#">Support</NavItem>
<NavItem eventKey={4} href="#">Feedback</NavItem>
</Nav>
</Row>

<p> © 2017 Zigvy Inc </p>
</Navbar>
);

export default ItemList;
