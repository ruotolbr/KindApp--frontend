import React, { useState } from "react";
import Landing from "./Components/Landing";
import OpportunityDetail from "./Components/OpportunityDetail";
import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  const [posts, setPosts] = useState([]);

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
                  <Route
                    path="/"
                    exact
                    render={() => {
                      return <Landing posts={posts} setPosts={setPosts} />;
                    }}
                  />
                  <Route
                    path="/details/:id"
                    exact
                    component={OpportunityDetail}
                  />
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