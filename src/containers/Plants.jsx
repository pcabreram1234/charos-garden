import React from "react";
import { useState } from "react";
import useMatchMedia from "../utils/matchMedia";
import MainPlantContainer from "../components/MainPlantContainer";
import FlowerCatalgo from "../components/FlowerCatalog";
import ProductDetails from "../containers/ProductDetails";
import { Scroll } from "../utils/scroll";
import { ScrollToMidle } from "../utils/ScrollToMidle";
import CarouselPlants from "../components/Carousel";
import { Link } from "react-router-dom";
import "../styles/App.css";
import "../styles/Plants.css";

const Plants = (props) => {
  const [srcMainImage, setSrc] = useState([]);
  const [titleMainImage, setTittle] = useState([]);
  const [id, setId] = useState([]);
  const [detail, setDetail] = useState([]);

  const match = useMatchMedia("(max-width:850px)");
  const matchLandScap = useMatchMedia(
    "(max-width:850px) and (orientation:landscape)"
  );

  const handleClick = (src, title, id, info) => {
    setSrc(src);
    setTittle(title);
    setId(id);
    setDetail(info);
    if (match) {
      ScrollToMidle();
    }
    if (matchLandScap) {
      ScrollToMidle(400);
    } else {
      Scroll();
    }
  };

  const handleLink = () => {
    props.history.push(`/ProductDetails/${id}`);
  };

  const handleShowInfo = () => {
    if (typeof id === "object") {
      alert("Favor de elegir una planta");
    } else {
      props.history.push(`/ProductDetails/${id}`);
    }
    /* typeof id === "object"
      ? alert("Favor de elegir una planta")
      : handleLink(id); */
  };

  return (
    <div className="PlantsContainer">
      <MainPlantContainer
        src={srcMainImage}
        title={titleMainImage}
        id={id}
        detail={detail}
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
