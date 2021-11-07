import React from "react";
import { useState } from "react";
import "../styles/App.css";
import "../styles/Plants.css";
import MainPlantContainer from "../components/MainPlantContainer";
import FlowerCatalgo from "../components/FlowerCatalog";
import { Scroll } from "../utils/scroll";

const Plants = () => {
  const [srcMainImage, setSrc] = useState([]);
  const [titleMainImage, setTittle] = useState([]);

  const handleClick = (src, title) => {
    setSrc(src);
    setTittle(title);
    Scroll();
  };

  return (
    <div className="PlantsContainer">
      <MainPlantContainer src={srcMainImage} title={titleMainImage} />
      <FlowerCatalgo handleClick={handleClick} />
    </div>
  );
};

export default Plants;
