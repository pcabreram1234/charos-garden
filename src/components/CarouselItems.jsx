import React from "react";
import ReactDOM from "react-dom";
import { Carousel } from "antd";
import "../styles/CarouselItems.css";
import "../styles/Carousel.css";

const CarouselItems = (props) => {
  //Objeto vacio donde se guardaran los nodos
  const objectImage = [];

  //Funcion que agrega al container del componente cada imagen
  const renderCollage = () => {
    for (let index = 0; index < 6; index++) {
      objectImage.push(
        <div key={Math.random()} className="slide-Container">
          <img src={props.src} alt="" width="100px" />
        </div>
      );
    }
  };
  renderCollage();

  ReactDOM.render(
    <Carousel autoplay dotPosition="top">
      {objectImage}
    </Carousel>,
    document.getElementById("app")
  );
};


export default CarouselItems;
