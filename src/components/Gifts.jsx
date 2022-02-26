import React from "react";
import GiftsInfo from "../utils/GiftsInfo.json";
import BackGroundImage from "../assets/images/Gifts/backGround.png";
import useMatchMedia from "../utils/matchMedia";
import { Carousel } from "antd";
import "../styles/Gifts.css";

const Gifts = () => {
  const mediaQuery = useMatchMedia("(max-width: 850px)");
  const renderGiftsCollage = GiftsInfo.Gifts.map((el) => {
    return (
      <div className="collageItem" key={Math.random() / 0.5}>
        <img src={el.src} alt={el.name} />
      </div>
    );
  });

  return (
    <div className="Gifts_container">
      <div className="Gifts_collage">
        {mediaQuery ? (
          <Carousel autoplay >{renderGiftsCollage}</Carousel>
        ) : (
          renderGiftsCollage
        )}
      </div>
      <div className="Gifts_info">
        <div className="Gifts_info--letters">
          <h1>Gifts Ideas</h1>
          <span>Tenemos las mejores opciones para tus regalos</span>
        </div>
        <div className="Gifts_info--image">
          <img src={BackGroundImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gifts;
