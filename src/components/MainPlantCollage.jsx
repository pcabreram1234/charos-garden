import React, { useState } from "react";
import ZoomIcon from "../assets/images/zoom.png";
import "../styles/MainPlantCollage.css";
import Modal2 from "./Modal2";

const MainPlantCollage = (props) => {
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

  const objectImage = [];
  const renderCollage = () => {
    for (let index = 0; index < 6; index++) {
      objectImage.push(
        <div className="thumnbnails" key={Math.random()}>
          <img src={props.src} className="planCollageImage" />
          <div className="actionButtons-Collage-container">
            <button
              type="button"
              role="button"
              className="actionButtonCollage"
              onClick={showModal}
            >
              <img src={ZoomIcon} alt="" />
            </button>
          </div>
        </div>
      );
    }
  };

  return (
    <>
      {renderCollage()}
      <Modal2
        title={props.title}
        isVisible={isModalVisible}
        handleCancel={handleCancel}
        handleOk={handleOk}
        src={props.src}
        hasCarousel={true}
      />
      {objectImage}
    </>
  );
};

export default MainPlantCollage;
