import React from 'react';
import Landing from './Components/Landing';
import { Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  
  return (
    <>

      <header>
        <h1>
          <a href="/">Welcome to Kind.</a>
        </h1>
      </header>
      <Container fluid>
  <Row>
    <Col>
    <main>
        <Route path="/" exact component={Landing}/>
        {/* <Route path="/details/:id" exact component={OpportunityDetail} /> */}
    </main>
      </Col>
  </Row>
</Container>
      
    </>
  );
}

export default App;