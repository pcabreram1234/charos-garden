import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../containers/Home";
import Plants from "../containers/Plants";
import Navbar from "../components/navbar";
import "../styles/App.css";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" sensitive={true} component={Home} />
        <Route exact path="/Plants" sensitive={true} component={Plants} />
      </Switch>
    </Router>
  );
};

export default App;
