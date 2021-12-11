import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Container, Row, Col, Form, Tab, Tabs } from "react-bootstrap"

import './index.css';


const App = () => {
  const [key, setKey] = useState('search');
  const [songs, setSongs] = useState([])
  const [query, setQuery] = useState("")

  return <div className="mt-5">
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="search" title="Search Inline" className="mx-5" >
        <Row className="m-md-5">
          <Col sm md="8" className="mx-auto">
            <Form.Control type="text" placeholder="Enter The Song Name" value={query} onChange={e => setQuery(e.target.value)} />
          </Col>
          <Col md="4" className="mx-auto">
            <Button variant="outline-dark" className="mx-auto">Look For Music</Button>
          </Col>
        </Row>
      </Tab>
      <Tab eventKey="artist" title="Artist" className="mx-5">
        <Row className="m-md-5">
          <Col sm md="8" className="mx-auto">
            <Form.Control type="text" placeholder="Enter The Artist Name" value={query} onChange={e => setQuery(e.target.value)} />
          </Col>
          <Col md="4" className="mx-auto">
            <Button variant="outline-dark" className="mx-auto">Look Artist</Button>
          </Col>
        </Row>
      </Tab>
      <Tab eventKey="album" title="Album" className="mx-5">
        <Row className="m-md-5">
          <Col sm md="8" className="mx-auto">
            <Form.Control type="text" placeholder="Enter The Album Name" value={query} onChange={e => setQuery(e.target.value)} />
          </Col>
          <Col md="4" className="mx-auto">
            <Button variant="outline-dark" className="mx-auto">Look For Album</Button>
          </Col>
        </Row>
      </Tab>
    </Tabs>
  </div >
}

ReactDOM.render(
  <Container>
    <App />
  </Container>,
  document.getElementById('root')
);

