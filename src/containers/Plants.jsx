import React from "react";
import { useState } from "react";
import useMatchMedia from "../utils/matchMedia";
import "../styles/App.css";
import "../styles/Plants.css";
import MainPlantContainer from "../components/MainPlantContainer";
import FlowerCatalgo from "../components/FlowerCatalog";
import { Scroll } from "../utils/scroll";
import { ScrollToMidle } from "../utils/ScrollToMidle";
import CarouselPlants from "../components/Carousel";

const Plants = (props) => {
  const [srcMainImage, setSrc] = useState([]);
  const [titleMainImage, setTittle] = useState([]);
  const [id, setId] = useState([]);

  const match = useMatchMedia("(max-width:850px)");
  const matchLandScap = useMatchMedia(
    "(max-width:850px) and (orientation:landscape)"
  );

  const handleClick = (src, title, id) => {
    setSrc(src);
    setTittle(title);
    setId(id);
    if (match) {
      ScrollToMidle();
    }
    if (matchLandScap) {
      console.log("Landscape");
      ScrollToMidle(400);
    } else {
      Scroll();
    }
  };

  const handleLink = () => {
    props.history.push(`/ProductDetails/${id}`);
  };

  const handleShowInfo = () => {
    typeof id === "object"
      ? alert("Favor de elegir una planta")
      : handleLink(id);
  };

  return (
    <div className="PlantsContainer">
      <MainPlantContainer
        src={srcMainImage}
        title={titleMainImage}
        id={id}
        handleShowInfo={handleShowInfo}
      />

      {match ? (
        <CarouselPlants cb={handleClick} />
      ) : (
        <FlowerCatalgo
          handleClick={handleClick}
          useMatchMedia={useMatchMedia}
        />
      )}
    </div>
  );
};

export default Plants;
