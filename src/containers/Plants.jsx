import React from "react";
import "../styles/App.css";
import "../styles/Plants.css";
import FlowerCatalgo from "../components/flowerCatalog";
import MainPlantContainer from "../components/mainPlantContainer";

const Plants = () => {
  return (
    <div className="PlantsContainer">
      <MainPlantContainer />
      <FlowerCatalgo />
    </div>
  );
};

export default Plants;
