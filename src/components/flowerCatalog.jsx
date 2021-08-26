import React from "react";
import UseFlowerCatalog from "../hooks/useFlowerCatalog";
import "../styles/flowerCatalog.css";
import Thumbnails from "./thumbnail";


const FlowerCatalgo = () => {
  const renderFlowers = UseFlowerCatalog();
  const imagesList = renderFlowers.map((el) => {

    return <Thumbnails key={el.id} src={el.src} />;
  });

  return <div className="photos-container">{imagesList}</div>;
};

export default FlowerCatalgo;
