import React, { useState } from "react";
import Landing from "./Components/Landing";
import OpportunityDetail from "./Components/OpportunityDetail";
import OpportunityCreate from "./Components/OpportunityCreate";
import Profile from "./Components/Profile"
import Nav from "./Components/Nav"
import MyKindPosts from "./Components/MyKindPosts";
import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col, Card } from "react-bootstrap";
import "./App.css"
import MyKindPosts from "./Components/MyKindPosts";

function App() {
  const [posts, setPosts] = useState([]);
  const [opp, setOpp] = useState([]);

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
                    path="/post/create/"
                    exact
                    render={() => {
                      return <MyKindPosts className="new-card"> opp={opp} setOpp={setOpp}</MyKindPosts>; 
                    }}
                  />
                  
                  <Route
                  path="/post/create/"
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