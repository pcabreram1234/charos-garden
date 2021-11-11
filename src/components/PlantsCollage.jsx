import React from "react";
import zoomIcon from "../assets/images/zoom.png";

const PlantsCollage = (props) => {
  function renderCollagePlant() {
    for (let i = 0; i < 5; i++) {
      return (
        <div className="thumbnail-container">
          <img src={props.srcImage} alt="" />
          <div className="actionButtons-container">
            <button type="button" role="button" className="actionButton">
              <img src={zoomIcon} alt="" />
            </button>
          </div>
        </div>
      );
    }
  }

  return <div className="mainContainer">{renderCollagePlant}</div>;
};

export default PlantsCollage;
