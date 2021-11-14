import React from "react";
import useFetchProduct from "../hooks/useFetchProduct";
import ZoomIcon from "../assets/images/zoom.png";

const ProductContainer = ({ id }) => {
  const fetch = useFetchProduct(id);
  let srcEl = "";

  for (const el of fetch) {
    srcEl = el.src;
  }
  return (
    <div className="ProductContainer">
      <h1>Ejemplo</h1>
      <div className="ProductContainer-image">
        <img src={ZoomIcon} alt="" />
      </div>
      <div className="ProductContainer-button">
        <img src={srcEl} alt="" />
      </div>
    </div>
  );
};

export default ProductContainer;
