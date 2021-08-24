import React from "react";
import { useState, useEffect } from "react";
import "../styles/flowerCatalog.css"

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

  const imagesList = images.map((el) => {
    return (
      <div key={el.id} className="thumbnails">
        <img src={el.src} alt="" />
      </div>
    );
  });
  return <div className="photos-container">{imagesList}</div>;
};

export default FlowerCatalgo;
