import React, { useState, useRef, useEffect } from "react";
import useMatchMedia from "../utils/matchMedia";
/* import FlowersJSon from "../utils/flowersBd.json"; */
import renderItemsCarousel from "../utils/renderItemsCarousel";
import CarouselPlants from "../components/Carousel";
import UseFlowerCatalog from "../hooks/useFlowerCatalog";
import "../styles/Flowers.css";

const Flowers = () => {
  const API = process.env.API_FLOWERS;
  let FlowersJSon = UseFlowerCatalog(API);
  let normalItems;
  let items;
  const [flowerInfo, setFlowerInfo] = useState([]);
  const [flowerSrc, setFlowerSrc] = useState([]);
  const [title, setTitle] = useState([]);
  const imageRef = useRef();
  const matchMedia = useMatchMedia("(max-width:850px)");

  function getFlowerInfo(info, src, title) {
    setFlowerInfo(info);
    setFlowerSrc(src);
    setTitle(title);
  }

  const renderItems = () => {
    /* Con esta funcion renderizamos el collage 
    dependiendo del mediaqueries */
    if (FlowersJSon.length > 0 && !matchMedia) {
      items = renderItemsCarousel(FlowersJSon, getFlowerInfo);
      return (normalItems = <div className="Flowers__Album">{items}</div>);
    }

    if (FlowersJSon.length > 0 && matchMedia) {
      return <CarouselPlants cb={getFlowerInfo} isFlowers={true} />;
    }
  };

  useEffect(() => {
    renderItems();
    if (imageRef.current.getAttribute("src") === "") {
      imageRef.current.style.display = "none";
    } else {
      imageRef.current.style.display = "";
    }
  }, [flowerSrc]);

  return (
    <div className="Flowers__Container">
      <div className="CurrentFlower_Container">
        <div className="CurrentFlowe-info">
          <h1>{title}</h1>
          <p>{flowerInfo}</p>
        </div>

        <div className="CurrentFlower--img">
          <img src={flowerSrc} alt="" ref={imageRef} />
        </div>
      </div>
      {renderItems()}
    </div>
  );
};

export default Flowers;
