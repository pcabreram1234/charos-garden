import React from "react";
import ProductContainer from "../components/ProductContainer";
import BackArrow from "../components/BackArrow";

const ProductDetails = ({ handleInfo }, props) => {
  const readInfo = () => {
    console.log(props);
  };
  return (
    <div
      onLoad={() => {
        handleInfo(readInfo());
      }}
    >
      <BackArrow />
      <ProductContainer />
    </div>
  );
};

export default ProductDetails;
