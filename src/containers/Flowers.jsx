import React, { useState } from "react";
import FlowersJSon from "../utils/flowersBd.json";
import "../styles/Flowers.css";

const Flowers = () => {
  const [flowerInfo, setFlowerInfo] = useState([]);
  const [flowerSrc, setFlowerSrc] = useState([]);
  const [title, setTitle] = useState([]);

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

  return (
    <div className="Flowers__Container">
      <div className="CurrentFlower_Container">
        <div className="CurrentFlowe-info">
          <h1>{title}</h1>
          <p>{flowerInfo}</p>
        </div>

        <div className="CurrentFlower--img">
          <img src={flowerSrc} alt="" />
        </div>
      </div>
      <div className="Flowers__Album">{items}</div>
    </div>
  );
};

export default Flowers;
