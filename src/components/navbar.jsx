import React from "react";
import SearchInput from "./searchInput";
import "../styles/navbar.css";

const Navabar = () => {
  return (
    <div className="navbar">
      <li>Home</li>
      <li>Gifts</li>
      <li>Flowers</li>
      <li>Plants</li>
      <li>About us</li>
      <li>Contact</li>
      <li>
        <SearchInput />
      </li>
    </div>
  );
};

export default Navabar;
