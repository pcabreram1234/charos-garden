import React from "react";
import { Link } from "react-router-dom";
import BackArrowIcon from "../assets/images/BackArrow.png";
import "../styles/BackArrow.css";

const BackArrow = () => {
  return (
    <div className="BackArrow-container">
      <Link to="/Plants">
        <button className="BackArrow-container__button">
          <img src={BackArrowIcon} alt="" />
          <span>Back</span>
        </button>
      </Link>
    </div>
  );
};

export default BackArrow;
