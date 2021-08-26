import React from "react";
import { createContext } from "react";

export const plantsContext = createContext({
  name: "",
  src: "https://i.pinimg.com/564x/13/be/5b/13be5bf3d5c8a2f209649b3c9e782dc9.jpg",
});
export const ProviderPlants = plantsContext.Provider;
export const ConsumerPlants = plantsContext.Consumer;

const setPlantContext = ( name, src ) => {
  return <ProviderPlants value={(name, src)}></ProviderPlants>;
};

export default setPlantContext;
