import React from "react";
import SearchInput from "./searchInput";

const Navabar = () => {
  return (
    <div>
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
