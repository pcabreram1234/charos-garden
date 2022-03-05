import React, { useState, useRef, useEffect } from "react";
import useMatchMedia from "../utils/matchMedia";
import FlowersJSon from "../utils/flowersBd.json";
import renderItemsCarousel from "../utils/renderItemsCarousel";
import CarouselPlants from "../components/Carousel";
import "../styles/Flowers.css";

const Flowers = () => {
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

  const items = renderItemsCarousel(FlowersJSon.Flowers, getFlowerInfo);

  const normalItems = <div className="Flowers__Album">{items}</div>;

  useEffect(() => {
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
      {matchMedia ? (
        <CarouselPlants cb={getFlowerInfo} isFlowers={true} />
      ) : (
        normalItems
      )}
    </div>
  );
};

export default Flowers;
