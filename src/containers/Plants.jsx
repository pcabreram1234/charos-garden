import React from "react";
import "../styles/App.css";
import "../styles/Plants.css";
import FlowerCatalgo from "../components/flowerCatalog";
import MainPlantContainer from "../components/mainPlantContainer";
import plantMainImageContext from "../context/plantMainImageContext";

const Plants = () => {
  const imageOb = {
    src: null,
    namePlant: null,
  };

  return (
    <div className="PlantsContainer">
      <plantMainImageContext.Provider value={imageOb}>
        <MainPlantContainer />
        <FlowerCatalgo />
      </plantMainImageContext.Provider>
    </div>
  );
};

export default Plants;
