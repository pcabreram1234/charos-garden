import React from "react";
import MainPlantCollage from "../components/MainPlantCollage";
import Modal2 from "./Modal2";
import "../styles/ProductContainer.css";
import * as modalFuntions from "../utils/modalFuntions";
import UseFlowerCatalog from "../hooks/useFlowerCatalog";

const ProductContainer = (props) => {
  const API = process.env.API_PLANTS;
  const fetch = UseFlowerCatalog(API);
  let srcEl = "";
  let title = "";

  const renderCurrentPlant = () => {
    if (fetch.Plants) {
      fetch.Plants.map((el) => {
        if (el.id.toString() === props.id) {
          srcEl = el.src;
          title = el.name;
        }
      });
    }
  };

  renderCurrentPlant();
  return (
    <div className="ProductContainer">
      <Modal2
        title={title}
        visible={modalFuntions.default.showModal}
        onOk={modalFuntions.default.handleOk}
        onCancel={modalFuntions.default.handleCancel}
        width={"100%"}
        centered={true}
        destroyOnClose
        footer={null}
        src={srcEl}
      />

      <div className="ProductContainer_details">
        <div className="Product_info">
          <h1>{title}</h1>
          <img src={srcEl} alt="" />
        </div>
      </div>
      <div className="Product-collage-Container">
        <MainPlantCollage src={srcEl} />
      </div>
    </div>
  );
};

export default ProductContainer;
