import React from 'react';
import Landing from './Components/Landing';
import { Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  
  return (
    <>

      <header>
        <h1>
          <a href="/">Welcome to Kind.</a>
        </h1>
      </header>
      <main>
        <Route path="/" exact component={Landing}/>
        {/* <Route path="/details/:id" exact component={OpportunityDetail} /> */}
      </main>
    </>
  );
}

export default App;
