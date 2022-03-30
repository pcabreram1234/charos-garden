import React from "react";
/* import GiftsInfo from "../utils/GiftsInfo.json"; */
import UseFlowerCatalog from "../hooks/useFlowerCatalog";
import BackGroundImage from "../assets/images/Gifts/backGround.png";
import useMatchMedia from "../utils/matchMedia";
import { Carousel } from "antd";
import "../styles/Gifts.css";

const Gifts = () => {
  const API = process.env.API_GIFTS;
  const GiftsInfo = UseFlowerCatalog(API);
  const mediaQuery = useMatchMedia("(max-width: 850px)");
  let renderGiftsCollage = [];

  const renderGifts = () => {
    if (GiftsInfo.Gifts) {
      renderGiftsCollage = GiftsInfo.Gifts.map((el) => {
        return (
          <div className="collageItem" key={Math.random() / 0.5}>
            <img src={el.src} alt={el.name} />
          </div>
        );
      });
    }
  };

  renderGifts();

  return (
    <div className="Gifts_container">
      <div className="Gifts_collage">
        {mediaQuery ? (
          <Carousel autoplay>{renderGiftsCollage}</Carousel>
        ) : (
          renderGiftsCollage
        )}
      </div>
      <div className="Gifts_info">
        <div className="Gifts_info--letters">
          <h1>Gifts Ideas</h1>
          <span>We have the best options for your gifts</span>
        </div>
        <div className="Gifts_info--image">
          <img src={BackGroundImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gifts;
