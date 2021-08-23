import React from "react";
import { useState, useEffect } from "react";

const FlowerCatalgo = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/plants/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setImages(data);
      });
  }, []);

  const imagesList = images.map((el) => {
    return (
      <div key={el.id}>
        <img src={el.src.toString()} alt="" />
      </div>
    );
  });
  return <div>{imagesList}</div>;
};

export default FlowerCatalgo;
