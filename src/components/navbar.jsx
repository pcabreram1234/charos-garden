import React from "react";
import SearchInput from "./searchInput";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../styles/navbar.css";

const Navabar = () => {
  return (
    <div className="navbar">
      <Router>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Gifts">Gifts</Link>
        </li>
        <li>
          <Link to="/Flowers">Flowers</Link>
        </li>
        <li>
          <Link to="/Plants">Plants</Link>
        </li>
        <li>
          <Link to="/AboutUs">About us</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
        <li>
          <SearchInput />
        </li>
      </Router>
    </div>
  );
};

export default Navabar;
