import React from "react";
import "../styles/App.css";
import "../styles/mainContainer.css";
import FlowerCatalgo from "../components/flowerCatalog";
import MainPlantCollage from "../components/mainPlantCollage";
import MainPlantContainer from "../components/mainPlantContainer";
import PlantsCollage from "../components/PlantsCollage";

const Plants = () => {
  return (
    <div className="mainContainer">
      <MainPlantContainer />
      <FlowerCatalgo />
    </div>
  );
};

export default Plants;
