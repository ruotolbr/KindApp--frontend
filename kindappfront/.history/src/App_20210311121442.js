import React, { useState } from "react";
import Landing from "./Components/Landing";
import OpportunityDetail from "./Components/OpportunityDetail";
import OpportunityCreate from "./Components/OpportunityCreate";
import Profile from "./Components/Profile"
import Nav from "./Components/Nav"
import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css"

function App() {
  const [posts, setPosts] = useState([]);

  return (
    <>
      <div>
        <header>
          <h1 className="title">Welcome to Kind</h1>
          <p className="subtitle">Find volunteer opportunities in your city.</p>
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
                  

                  <Route
                  path="/myposts/"
                  exact
                  component={OpportunityCreate}
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