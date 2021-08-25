import React from "react";
import UseFlowerCatalog from "../hooks/useFlowerCatalog";
import "../styles/flowerCatalog.css";
import setSrcMainImage from "../utils/setSrcMainImage";

const FlowerCatalgo = () => {
  const renderFlowers = UseFlowerCatalog()
  
  const imagesList = renderFlowers.map((el) => {
    return (
      <div key={el.id} className="thumbnails" onClick={setSrcMainImage(el.src, "mainPlantContainer")}>
        <img src={el.src} alt="" />
      </div>
    );
  });
  

  return <div className="photos-container">
    {imagesList}
  </div>;
};

export default FlowerCatalgo;
