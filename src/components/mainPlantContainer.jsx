import React from "react";
import MainPlantCollage from "./mainPlantCollage";
import ZoomIcon from "../assets/images/zoom.png";
import info from "../assets/images/info.png";
import "../styles/mainPlantContainer.css";
import { useState } from "react";
import Modal2 from "./Modal2";

const MainPlantContainer = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="container">
      <Modal2
        isVisible={isModalVisible}
        handleCancel={handleCancel}
        handleOk={handleOk}
        src={props.src}
      />
      <div className="titleContainer">
        <h2 className="mainPlant--title">{props.title}</h2>
      </div>
      <div className="plantMainImage-container">
        <img className="plantMainImage" src={props.src} />
        <div className="actionButtons-container">
          <button
            className="actionButton"
            role="button"
            type="button"
            onClick={showModal}
          >
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
