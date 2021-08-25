import React from "react";
import UseFlowerCatalog from "../hooks/useFlowerCatalog";
import "../styles/flowerCatalog.css";

const FlowerCatalgo = () => {
  const renderFlowers = UseFlowerCatalog();
  const handleClick = (e) => {
    console.log(e);
  };

  const imagesList = renderFlowers.map((el) => {
    return (
      <div key={el.id} className="thumbnails" onClick={handleClick}>
        <img src={el.src} alt="" />
      </div>
    );
  });
  return <div className="photos-container">{imagesList}</div>;
};

export default FlowerCatalgo;
