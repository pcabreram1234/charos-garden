import React from "react";
import ZoomIcon from "../assets/images/zoom.png";
import "../styles/MainPlantCollage.css";

const MainPlantCollage = (props) => {
  const objectImage = []
  const renderCollage = () => {
    for (let index = 0; index < 6; index++) {
      objectImage.push(
        <div className="thumnbnails" key={Math.random()}>
          <img src={props.src} className="planCollageImage" />
          <div className="actionButtons-Collage-container">
            <button type="button" role="button" className="actionButtonCollage">
              <img src={ZoomIcon} alt="" />
            </button>
          </div>
        </div>
      )
    }
  }

  renderCollage()
  return objectImage;
};

export default MainPlantCollage;
