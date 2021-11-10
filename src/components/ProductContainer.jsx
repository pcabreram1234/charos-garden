import React from "react";
import ZoomIcon from "../assets/images/zoom.png";

const ProductContainer = (props) => {
  /*   const { infoReceived } = props; */
  console.log(props);
  return (
    <div className="ProductContainer">
      {/*      <h1>{infoReceived.name}</h1> */}
      <div className="ProductContainer-image">
        <img src={ZoomIcon} alt="" />
      </div>
      <div className="ProductContainer-button"></div>
    </div>
  );
};

export default ProductContainer;
