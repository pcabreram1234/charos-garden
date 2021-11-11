import React from "react";
import { Link } from "react-router-dom";
import MainPlantCollage from "./MainPlantCollage";
import ProductDetails from "../containers/Product-Details";
import ZoomIcon from "../assets/images/zoom.png";
import info from "../assets/images/info.png";
import "../styles/mainPlantContainer.css";
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
        title={props.title}
        isVisible={isModalVisible}
        handleCancel={handleCancel}
        handleOk={handleOk}
        src={props.src}
        children={<img className="plantMainImage" src={props.src} />}
        hasCarousel={false}
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
          <Link to="/Products">
            <button type="button" role="button" className="actionButton">
              <img src={info} alt="" />
            </button>
          </Link>
        </div>
      </div>
      <div className="collageContainer">
        <MainPlantCollage src={props.src} />
      </div>
    </div>
  );
};

export default MainPlantContainer;
