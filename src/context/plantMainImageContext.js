import { createContext } from "react";

const imageOb = {
  src: null,
  namePlant: null,
};

const plantMainImageContext = createContext({ imageOb });

export default plantMainImageContext;
