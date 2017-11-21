import React from 'react';
import { PageHeader, Button, ButtonGroup, Thumbnail, Row, Col, Navbar, MenuItem, Form, FormGroup, FormControl, ControlLabel, Glyphicon, ResponsiveEmbed, Grid} from 'react-bootstrap';
class GroundDetail extends React.Component {
  render() {
    return(
      <div>
      <Row>
      <PageHeader>
      <a href="http://localhost:3000/"><Glyphicon glyph="menu-left"> </Glyphicon> </a> Ground info
      </PageHeader>
      </Row>

      <Row>
      <Col xs={12} md={8}>
      <img src="http://stadiumdb.com/pic-projects/stamford_bridge/stamford_bridge08.jpg" style={{width:"700", height:"350"}} />
      </Col>
      <Col xs={6} md={4}>
      <h3> Stadium's Name </h3>
      <p> Description </p>
      <hr/>
      <code> </code>
      <ButtonGroup>
      <Button>
      BOOK NOW
      </Button>
      <Button>
      <Glyphicon glyph="star-empty"> Favorite</Glyphicon>
      </Button>
      <Button>
      <Glyphicon glyph="share"> Share</Glyphicon>
      </Button>
      </ButtonGroup>
      </Col>
      </Row>
      <Row>
      <Col>
      <PageHeader>
      <p>Comment and Review components will be here</p>
      </PageHeader>
      </Col>
      </Row>
      </div>
    )
  }
}

export default GroundDetail;
