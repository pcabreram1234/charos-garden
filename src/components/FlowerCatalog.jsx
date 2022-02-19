import React from "react";
import UseFlowerCatalog from "../hooks/useFlowerCatalog";
import renderPlants from "../utils/renderPlants";
import CarouselPlants from "./Carousel";
import useMatchMedia from "../utils/matchMedia";
import "../styles/flowerCatalog.css";
import Thumbnails from "./Thumbnail";

const FlowerCatalgo = (props) => {
  const renderFlowers = UseFlowerCatalog();
  const match = useMatchMedia("(max-width:850px)");
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

  return (
    <div className="photos-container">
      {match ? (
        <CarouselPlants>
          {renderPlants(renderFlowers, props.handleClick)}
        </CarouselPlants>
      ) : (
        imagesList
      )}
    </div>
  );
};

export default FlowerCatalgo;
