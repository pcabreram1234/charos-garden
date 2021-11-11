import React from "react";
import SearchInput from "./searchInput";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = (props) => {
  const listComponent = (
    <>
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
    </>
  );

  return (
    <div className="navbar">
      {props.hasBackArrow
        ? ((<BackArrow />), listComponent)
        : { listComponent }}
    </div>
  );
};

export default Navbar;
