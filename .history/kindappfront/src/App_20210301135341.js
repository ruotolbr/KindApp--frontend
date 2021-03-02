import React from 'react';
import Landing from './Landing';
import { Route } from 'react-router-dom';
import OpportunityDetail from './OpportunityDetail';

function App() {
  
  return (
    <>
      <header>
        <h1>
          <a href="/">Audubon Society</a>
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