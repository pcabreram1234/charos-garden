import "../styles/flowerCatalog.css";
import React from "react";
import { plantInfo } from "../containers/Plants";

const Thumbnails = (props) => {
  function setSrc(e) {
    plantInfo.src = e.target.currentSrc;
    plantInfo.name=e.target.name
    console.log(e);
    document.querySelector(".plantMainImage").setAttribute("src",  plantInfo.src );
    document.querySelector('.mainPlant--title').innerHTML=plantInfo.name
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    return plantInfo.name;
  }

  return (
    <div key={props.id} className="thumbnails" onClick={setSrc}>
      <img src={props.src} alt="" name={props.name} />
    </div>
  );
};

export default Thumbnails;
