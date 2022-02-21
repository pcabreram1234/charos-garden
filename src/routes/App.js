import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../containers/Home";
import Plants from "../containers/Plants";
import Navbar from "../components/Navbar";
import ProductDetails from "../containers/ProductDetails";
import AboutUs from "../containers/AboutUs";
import Flowers from "../containers/Flowers";
import ContactUs from "../containers/ContactUs";
import "../styles/App.css";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" sensitive={true} component={Home} />
        <Route exact path="/Plants" sensitive={true} component={Plants} />
        <Route path="/ProductDetails/:id" component={ProductDetails} />
        <Route path="/AboutUs" component={AboutUs} />
        <Route path="/Flowers" component={Flowers} />
        <Route path="/Contact" component={ContactUs} />
      </Switch>
    </Router>
  );
};

export default App;
