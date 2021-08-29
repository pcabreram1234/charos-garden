import React from "react";
import MainPlantCollage from "./mainPlantCollage";
import ZoomIcon from "../assets/images/zoom.png";
import info from "../assets/images/info.png";
import "../styles/mainPlantContainer.css";
import { useState } from "react";
import ModalContainer from "./Modal2";

const MainPlantContainer = (props) => {
  const [toggle, setModalSate] = useState(false);

  const toggleModal = () => {
    setModalSate(!toggle);
  };
  return (
    <div className="container">
      <Modal />
      {/*       <div className="modalContainer">
        <Modal isOpen={toggle} toggle={toggleModal} centered={true} size="lg">
          <ModalHeader>{props.title}</ModalHeader>
          <ModalBody>
            <img src={props.src} alt="" />
          </ModalBody>
        </Modal>
      </div> */}
      <div className="titleContainer">
        <h2 className="mainPlant--title">{props.title}</h2>
      </div>
      <div className="plantMainImage-container">
        <img className="plantMainImage" src={props.src} />
        <div className="actionButtons-container">
          <button className="actionButton" role="button" type="button">
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
