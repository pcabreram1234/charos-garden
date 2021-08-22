import React from "react";
import fetchFlowers from "../hooks/fetchFlowers";

const FlowerCatalgo = () => {
  const API = "http://localhost:3000/Plants";
  const fetchFlow = fetchFlowers(API).then((response) => {
    response.map((el) => {
      return (
        <div>
          <img src={el.src} alt="" />
        </div>
      );
    });
  });

  return <div className="catalog-container">{fetchFlow}</div>;
};

export default FlowerCatalgo;
