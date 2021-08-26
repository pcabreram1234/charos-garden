import "../styles/flowerCatalog.css";
import { ProviderPlants } from "../context/Plants";
import setPlantContext from "../context/Plants";
import React from "react";

const Thumbnails = (props) => {
  const plantInfo = {
    name: props.id,
    src: props.src,
  };
  return (
    <div
      key={props.id}
      className="thumbnails"
      onClick={(name, src) => {
        name = props.id;
        src = props.src;
        console.log(setPlantContext(name, src));
        return <ProviderPlants value={{ name, src }}></ProviderPlants>;
      }}
    >
      <img src={props.src} alt="" />
    </div>
  );
};

export default Thumbnails;
