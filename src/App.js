import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.css';

import Home from './page/Home';
import Create from './page/Create';
import Update from './page/Update';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/create-user" component={Create} />
      <Route path="/update-user/:slugUpdate" component={Update} />
    </Router>
  );
}

export default App;
