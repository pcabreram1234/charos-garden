import React from "react";
import UseFlowerCatalog from "../hooks/useFlowerCatalog";
import "../styles/flowerCatalog.css";
import plantMainImageContext from "../context/plantMainImageContext";
import useMainPlantContainer from "../hooks/useMainPlantContainer";

const FlowerCatalgo = () => {
  const renderFlowers = UseFlowerCatalog();
  const handleClick = (e) => {
    console.log(e);
  };

  const imagesList = renderFlowers.map((el) => {
    const useMainContext = {
      src: el.src,
      namePlant: el.id
    }
    return (
      <div key={el.id} className="thumbnails" onClick={useMainPlantContainer(useMainContext)}>
        <img src={el.src} alt="" />
      </div>
    );
  });
  return <div className="photos-container">
    <plantMainImageContext.Consumer>
      {imagesList}
    </plantMainImageContext.Consumer>
  </div>;
};

export default FlowerCatalgo;
