import React from "react";
import { useState, useEffect } from "react";
import "../styles/flowerCatalog.css";
import ZoomIcon from "../assets/images/zoom.png";
import info from "../assets/images/info.png";

const FlowerCatalgo = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/Plants")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setImages(data);
      });
  }, []);

  const handleClick = (e) => {
    console.log(e.target.attributes.src.nodeValue)
    return (
      <div className="container">
        <h2>{}</h2>
        <div className="plantMainImage-container">
          <img src={e.target.src} className="plantMainImage" />
          <div className="actionButtons-container">
            <button type="button" role="button" className="actionButton">
              <img src={ZoomIcon} alt="" />
            </button>
            <button type="button" role="button" className="actionButton">
              <img src={info} alt="" />
            </button>
          </div>
        </div>
      </div>
    );
  };

  const imagesList = images.map((el) => {
    return (
      <div key={el.id} className="thumbnails" onClick={handleClick}>
        <img src={el.src} alt="" />
      </div>
    );
  });
  return <div className="photos-container">{imagesList}</div>;
};

export default FlowerCatalgo;
