import React from "react";
import ReactDOM from "react-dom";
import CarouselItems from "../components/CarouselItems";

export const mountCarousel = (node, src) => {
  ReactDOM.render(<CarouselItems src={src} />, node);
};
