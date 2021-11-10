import React from "react";
import ProductContainer from "../components/ProductContainer";
import BackArrow from "../components/BackArrow";

const ProductDetails = ({ handleInfoReceived }) => {
  const receivedInfo = handleInfoReceived;
  return (
    <div>
      <BackArrow />
      <ProductContainer receivedInfo={receivedInfo} />
    </div>
  );
};

export default ProductDetails;
