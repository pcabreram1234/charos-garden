import React from "react";
import ZoomIcon from "../assets/images/zoom.png";
import info from "../assets/images/info.png";
import plant1 from "../assets/images/plant1.png";
import "../styles/mainPlantContainer.css"

const MainPlantContainer = (props) => {
  return (
    <div>
      <h2>{props.plantName}</h2>
      <div className="plantMainImage-container">
        <img src={plant1} className="plantMainImage" />
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
