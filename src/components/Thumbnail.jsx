import "../styles/flowerCatalog.css";
import React from "react";

const Thumbnails = (props) => {
  return (
    <div
      key={props.id}
      className="thumbnails"
      onClick={() => {
        props.getSrcImage(props.src, props.name, props.id, props.detail);
      }}
    >
      <img src={props.src} alt="" name={props.name} />
    </div>
  );
};

export default Thumbnails;
