import React from "react";
import UseFlowerCatalog from "../hooks/useFlowerCatalog";
import "../styles/flowerCatalog.css";
import Thumbnails from "./Thumbnail";

const FlowerCatalgo = (props) => {
  const renderFlowers = UseFlowerCatalog();
  const imagesList = renderFlowers.map((el) => {
    return (
      <Thumbnails
        key={el.id}
        src={el.src}
        name={el.name}
        id={el.id}
        getSrcImage={props.handleClick}
      />
    );
  });

  return <div className="photos-container">{imagesList}</div>;
};

export default FlowerCatalgo;
