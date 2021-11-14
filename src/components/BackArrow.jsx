import React from "react";
import { Link } from "react-router-dom";
import BackArowIcon from "../assets/images/BackArrow.png";
import "../styles/BackArrow.css";

const BackArrow = () => {
  return (
    <>
      <Link to="/Plants">
        <div className="BackArrow-container">
          <div className="BackArrow-container__button">
            <img src={BackArowIcon} alt="" />
            <span>Volver</span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default BackArrow;
