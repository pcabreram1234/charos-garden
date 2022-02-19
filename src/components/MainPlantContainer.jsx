import React, { useState, useRef, useEffect } from "react";
import MainPlantCollage from "./MainPlantCollage";
import ZoomIcon from "../assets/images/zoom.png";
import info from "../assets/images/info.png";
import "../styles/mainPlantContainer.css";
import Modal2 from "./Modal2";

const MainPlantContainer = (props) => {
  const { handleShowInfo } = props;
  const plantMainImageRef = useRef();
  const collageContainerRef = useRef();
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

  useEffect(() => {
    if (plantMainImageRef.current.getAttribute("src") === "") {
      collageContainerRef.current.style.display = "none";
    } else {
      collageContainerRef.current.style.display = "";
    }
  }, [plantMainImageRef.current]);

  return (
    <div className="container">
      <Modal2
        title={props.title}
        isVisible={isModalVisible}
        handleCancel={handleCancel}
        handleOk={handleOk}
        src={props.src}
        children={<img className="plantMainImage" src={props.src} />}
        hasCarousel={false}
      />
      <div className="plantMainImage-container">
        <div className="titleContainer">
          <h2 className="mainPlant--title">{props.title}</h2>
        </div>
        <div className="plantMainImage__container">
          <img
            className="plantMainImage"
            src={props.src}
            ref={plantMainImageRef}
          />
        </div>
        <div className="actionButtons-container">
          <button
            className="actionButton"
            role="button"
            type="button"
            onClick={showModal}
          >
            <img src={ZoomIcon} alt="" />
          </button>
          <button
            type="button"
            role="button"
            className="actionButton"
            onClick={handleShowInfo}
          >
            <img src={info} alt="" />
          </button>
        </div>
      </div>
      <div className="collageContainer" ref={collageContainerRef}>
        <MainPlantCollage src={props.src} />
      </div>
    </div>
  );
};

export default MainPlantContainer;
