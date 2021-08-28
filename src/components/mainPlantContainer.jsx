import React from "react";
import MainPlantCollage from "./mainPlantCollage";
import ZoomIcon from "../assets/images/zoom.png";
import info from "../assets/images/info.png";
import "../styles/mainPlantContainer.css";
import ModalComponent from "../components/Modal";
import { useState } from "react";
import { render } from "react-dom";

const MainPlantContainer = (props) => {
  const [toggle, setModalSate] = useState([false]);

  const toggleModal = () => {
    const modalOption = {
      isOpen: setModalSate(!toggle),
      srcModalImage: props.src,
      header: props.title,
    };
    console.log(modalOption);
    return modalOption;
  };

  return (
    <div className="container">
      <div className="titleContainer">
        <h2 className="mainPlant--title">{props.title}</h2>
      </div>
      <div className="plantMainImage-container">
        <img className="plantMainImage" src={props.src} />
        <div className="actionButtons-container">
          <button
            type="button"
            role="button"
            className="actionButton"
            onClick={() => {
              toggleModal();
              return <ModalComponent toggleModal={toggleModal} />;
            }}
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
