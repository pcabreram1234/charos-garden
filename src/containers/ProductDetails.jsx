import React from "react";
import ProductContainer from "../components/ProductContainer";
import BackArrow from "../components/BackArrow";
import PlantInfo from "../components/PlantInfo";
import UseFlowerCatalog from "../hooks/useFlowerCatalog";
import "../styles/ProductDetails.css";

const ProductDetails = (props) => {
  const { id } = props.match.params;
  const API = process.env.API_PLANTS;
  const currentPlant = UseFlowerCatalog(API);
  let detail;
  const getDetails = () => {
    if (currentPlant.Plants) {
      currentPlant.Plants.map((el) => {
        if (el.id.toString() === id) {
          detail = el.detail;
        }
      });
    }
  };

  getDetails();

  return (
    <div className="ProductDetails__Container">
      <BackArrow />
      <ProductContainer id={id} />
      <PlantInfo id={id} detail={detail} />
    </div>
  );
};

export default ProductDetails;
