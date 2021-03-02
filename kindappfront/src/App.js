import React from 'react';
import Landing from './Components/Landing';
import { Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  
  return (
    <>
  <div>
      <header>
        <h1>Welcome to Kind</h1>
      </header>
      <div>
      <Container fluid>
  <Row className="adding-margin">
    <Col>
    <main>
        <Route path="/" exact component={Landing}/>
        {/* <Route path="/details/:id" exact component={OpportunityDetails} /> */}
    </main>
      </Col>
  </Row>
</Container>
    </div>
 </div>     
    </>
  );
}

export default App;
