import React from "react";
import { useState } from "react";
import "../styles/App.css";
import "../styles/Plants.css";
import MainPlantContainer from "../components/MainPlantContainer";
import FlowerCatalgo from "../components/FlowerCatalog";
import { Scroll } from "../utils/scroll";

const Plants = (props) => {
  const [srcMainImage, setSrc] = useState([]);
  const [titleMainImage, setTittle] = useState([]);
  const [id, setId] = useState([]);

  const handleClick = (src, title, id) => {
    setSrc(src);
    setTittle(title);
    setId(id);
    Scroll();
  };

  return (
    <div className="PlantsContainer">
      <MainPlantContainer src={srcMainImage} title={titleMainImage} id={id} />
      <FlowerCatalgo handleClick={handleClick} />
    </div>
  );
};

export default Plants;
