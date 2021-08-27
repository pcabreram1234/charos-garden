import React from "react";
import ZoomIcon from "../assets/images/zoom.png";
import info from "../assets/images/info.png";
import "../styles/mainPlantContainer.css";

const MainPlantContainer = () => {
  return (
    <div className="container">
      <div className="titleContainer">
        <h2 className="mainPlant--title"></h2>
      </div>

      <div className="plantMainImage-container">
        <img className="plantMainImage" />
        <div className="actionButtons-container">
          <button type="button" role="button" className="actionButton">
            <img src={ZoomIcon} alt="" />
          </button>
          <button type="button" role="button" className="actionButton">
            <img src={info} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainPlantContainer;
