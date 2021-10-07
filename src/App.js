import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import Home from "./page/Home";
import Create from "./page/Create";
import Update from "./page/Update";
import Login from "./page/Login";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("https://615d0d85c2981300177363dc.mockapi.io/n/user")
      .then((response) => {
        dispatch({ type: "DATA_USER", payload: response.data });
      });
  }, []);

  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/create-user" component={Create} />
      <Route path="/login" component={Login} />
      <Route path="/update-user/:slugUpdate" component={Update} />
    </Router>
  );
}

export default App;
