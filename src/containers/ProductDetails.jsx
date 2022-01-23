import React from "react";
import ProductContainer from "../components/ProductContainer";
import BackArrow from "../components/BackArrow";
import PlantInfo from "../components/PlantInfo";
import "../styles/ProductDetails.css";

const ProductDetails = (props) => {
  const { id } = props.match.params;
  return (
    <div className="ProductDetails__Container">
      <BackArrow />
      <ProductContainer id={id} />
      <PlantInfo id={id} />
    </div>
  );
};

export default ProductDetails;
