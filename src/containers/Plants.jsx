import React from "react";
import "../styles/App.css";
import "../styles/Plants.css";
import FlowerCatalgo from "../components/flowerCatalog";
import MainPlantContainer from "../components/mainPlantContainer";
import plantMainImageContext from "../context/plantMainImageContext";

const Plants = (props) => {
  const setSrcImage = (src) => {
    return src;
  };

  return (
    <div className="PlantsContainer">
      <plantMainImageContext.Provider value={[]}>
        <MainPlantContainer srcImage={setSrcImage()} />
        <FlowerCatalgo />
      </plantMainImageContext.Provider>
    </div>
  );
};

export default Plants;
