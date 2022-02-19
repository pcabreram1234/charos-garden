import React from "react";
import FlowersJSon from "../utils/flowersBd.json";
import PlantsBD from "../utils/plantsBd.json";
import renderItemsCarousel from "../utils/renderItemsCarousel";
import renderPlants from "../utils/renderPlants";
import "../styles/CarouselPlants.css";
import { Carousel } from "antd";

const CarouselPlants = (props) => {
  return (
    <Carousel autoplay>
      {props.isFlowers
        ? renderItemsCarousel(FlowersJSon.Flowers, props.cb)
        : renderPlants(PlantsBD.Plants, props.cb)}
    </Carousel>
  );
};

export default CarouselPlants;
