import React from "react";
import ProductContainer from "../components/ProductContainer";
import BackArrow from "../components/BackArrow";

const ProductDetails = (props) => {
  const { id } = props.match.params;
  return (
    <div>
      <BackArrow />
      <ProductContainer id={id} />
    </div>
  );
};

export default ProductDetails;
