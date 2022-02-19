import React, { useRef, useState } from "react";
import SearchInput from "./searchInput";
import { Link } from "react-router-dom";
import MenuIcon from "../assets/images/Menu.png";
import "../styles/navbar.css";

const Navbar = () => {
  const navBarButtonRef = useRef();
  const navBarItemsRef = useRef();
  const [navClass, setNavClass] = useState("navbar_items");

  const handleMenu = () => {
    navClass === "navbar_items"
      ? setNavClass("navbar_items active")
      : setNavClass("navbar_items");
  };

  return (
    <div className="navbar">
      <button
        className="navbar--button"
        ref={navBarButtonRef}
        onClick={handleMenu}
      >
        <img src={MenuIcon} alt="" />
      </button>

      <div className={navClass} ref={navBarItemsRef}>
        <li>
          <Link to="/" onClick={handleMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/Gifts" onClick={handleMenu}>
            Gifts
          </Link>
        </li>
        <li>
          <Link to="/Flowers" onClick={handleMenu}>
            Flowers
          </Link>
        </li>
        <li>
          <Link to="/Plants" onClick={handleMenu}>
            Plants
          </Link>
        </li>
        <li>
          <Link to="/AboutUs" onClick={handleMenu}>
            About us
          </Link>
        </li>
        <li>
          <Link to="/Contact" onClick={handleMenu}>
            Contact
          </Link>
        </li>
      </div>

      <div className="SearchField">
        <SearchInput />
      </div>
    </div>
  );
};

export default Navbar;
