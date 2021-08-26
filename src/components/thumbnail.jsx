import "../styles/flowerCatalog.css";
import React from "react";
import { plantInfo } from "../containers/Plants";



const Thumbnails = (props) => {

  function setSrc(e) {
    plantInfo.name = e.target.currentSrc
    document.querySelector('.plantMainImage').setAttribute('src', e.target.currentSrc)
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    return plantInfo.name
  }

  return (
    <div
      key={props.id} className="thumbnails" onClick={setSrc}>
      <img src={props.src} alt="" />
    </div>
  );
};

export default Thumbnails;
