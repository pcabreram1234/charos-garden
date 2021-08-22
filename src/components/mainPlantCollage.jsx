import React from "react";
import ZoomIcon from "../assets/images/zoom.png";
import plant1 from "../assets/images/plant1.png";

const MainPlantCollage = (props) => {
  function renderCollage() {
    for (let index = 0; index < 7; index++) {
      return (
        <div className="imageCollage-container">
          <img src={plant1} className="planCollageImage" />
          <div className="actionButtons-container">
            <button type="button" role="button" className="actionButton">
              <img src={ZoomIcon} alt="" />
            </button>
          </div>
        </div>
      );
    }
  }
  return <div>{renderCollage()}</div>;
};

export default MainPlantCollage;
