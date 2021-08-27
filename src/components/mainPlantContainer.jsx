import React from "react";
import MainPlantCollage from "./mainPlantCollage";
import ZoomIcon from "../assets/images/zoom.png";
import info from "../assets/images/info.png";
import "../styles/mainPlantContainer.css";

const MainPlantContainer = (props) => {



  return (
    <div className="container">
      <div className="titleContainer">
        <h2 className="mainPlant--title">{props.title}</h2>
      </div>
      <div className="plantMainImage-container">
        <img className="plantMainImage" src={props.src} />
        <div className="actionButtons-container">
          <button type="button" role="button" className="actionButton">
            <img src={ZoomIcon} alt="" />
          </button>
          <button type="button" role="button" className="actionButton">
            <img src={info} alt="" />
          </button>
        </div>
      </div>
      <div className="collageContainer">
        <MainPlantCollage src={props.src} />
      </div>
    </div>
  );
};

export default MainPlantContainer;
