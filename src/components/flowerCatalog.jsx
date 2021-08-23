import React from "react";
import { useState, useEffect } from "react";

const FlowerCatalgo = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/Plants")
      .then((response) => response.json())
      .then((data) => {
        setImages(data);
      });
  }, []);

  const imagesList = images.map((el) => {
    return (
      <div key={el.id}>
        <img src={el.src} alt="" />
      </div>
    );
  });
  return <div>{imagesList}</div>;
};

export default FlowerCatalgo;
