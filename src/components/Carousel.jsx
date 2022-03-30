import React from "react";
import renderItemsCarousel from "../utils/renderItemsCarousel";
import renderPlants from "../utils/renderPlants";
import UseFlowerCatalog from "../hooks/useFlowerCatalog";
import "../styles/CarouselPlants.css";
import { Carousel } from "antd";

const CarouselPlants = (props) => {
  const API_FLOWERS = process.env.API_FLOWERS;
  const API_PLANTS = process.env.API_PLANTS;
  let items;

  const flowersItems = UseFlowerCatalog(API_FLOWERS);
  const plantsItems = UseFlowerCatalog(API_PLANTS);

  const renderItems = () => {
    if (flowersItems.Flowers || plantsItems.Plants) {
      props.isFlowers
        ? (items = renderItemsCarousel(flowersItems.Flowers, props.cb))
        : (items = renderPlants(plantsItems.Plants, props.cb));
    }
  };

  renderItems();

  return <Carousel autoplay>{items}</Carousel>;
};

export default CarouselPlants;
