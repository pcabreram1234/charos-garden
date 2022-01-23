import React from "react";
import useFetchProduct from "../hooks/useFetchProduct";
import MainPlantCollage from "../components/MainPlantCollage";
import Modal2 from "./Modal2";
import ZoomIcon from "../assets/images/zoom.png";
import "../styles/ProductContainer.css";
import * as modalFuntions from "../utils/modalFuntions";

const ProductContainer = (props) => {
  const { id } = props;
  const fetch = useFetchProduct(id);
  let srcEl = "";
  let title = "";

  for (const el of fetch) {
    srcEl = el.src;
    title = el.name;
  }
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
      <div className="ProductContainer-button">
        <img
          src={ZoomIcon}
          alt=""
          onClick={modalFuntions.default.showModal()}
        />
      </div>
      <div className="ProductContainer-image">
        <h1>{title}</h1>
        <img src={srcEl} alt="" />
      </div>
      <div className="Product-collage-Container">
        <MainPlantCollage src={srcEl} />
      </div>
    </div>
  );
};

export default ProductContainer;
