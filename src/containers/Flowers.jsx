import React, { useState, useRef, useEffect } from "react";
import FlowersJSon from "../utils/flowersBd.json";
import "../styles/Flowers.css";

const Flowers = () => {
  const [flowerInfo, setFlowerInfo] = useState([]);
  const [flowerSrc, setFlowerSrc] = useState([]);
  const [title, setTitle] = useState([]);
  const imageRef = useRef();

  function getFlowerInfo(info, src, title) {
    setFlowerInfo(info);
    setFlowerSrc(src);
    setTitle(title);
  }

  const items = FlowersJSon.Flowers.map((el) => {
    return (
      <div
        className="item_Container"
        key={el.id}
        onClick={() => {
          getFlowerInfo(el.detail, el.src, el.name);
        }}
      >
        <img src={el.src} alt="" />
      </div>
    );
  });

  useEffect(() => {
    console.log(imageRef.current);
    if (imageRef.current.getAttribute("src") === "") {
      imageRef.current.style.display = "none";
      console.log("No hay imagen que mostrar");
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
      <div className="Flowers__Album">{items}</div>
    </div>
  );
};

export default Flowers;
