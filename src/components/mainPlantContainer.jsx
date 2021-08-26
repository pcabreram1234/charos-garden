import React from "react";
import ZoomIcon from "../assets/images/zoom.png";
import info from "../assets/images/info.png";
import "../styles/mainPlantContainer.css";
import { ConsumerPlants, plantsContext,  } from "../context/Plants";
import { useContext } from "react";

const MainPlantContainer = () => {
  const image = useContext(plantsContext);
  return (
    <ConsumerPlants>
      {(props) => {
        <div className="container">
          <h2>{image.name}</h2>
          <div className="plantMainImage-container">
            <img className="plantMainImage" src={image.src} />
            <div className="actionButtons-container">
              <button type="button" role="button" className="actionButton">
                <img src={ZoomIcon} alt="" />
              </button>
              <button type="button" role="button" className="actionButton">
                <img src={info} alt="" />
              </button>
            </div>
          </div>
        </div>;
      }}
    </ConsumerPlants>
  );
};

export default MainPlantContainer;
