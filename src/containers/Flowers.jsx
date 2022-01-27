import React from "react";
import FlowersJSon from "../utils/flowersBd.json";
import "../styles/Flowers.css";

const Flowers = (props) => {
  const items = FlowersJSon.Flowers.map((el) => {
    return (
      <div className="item_Container" key={el.id}>
        <img src={el.src} alt="" />
      </div>
    );
  });

  return (
    <div className="Flowers__Container">
      <div className="Flower_Main__Container"></div>

      <div className="Flowers__Album">{items}</div>
    </div>
  );
};

export default Flowers;
