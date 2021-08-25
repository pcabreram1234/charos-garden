import { useContext } from "react";
import plantMainImageContext from "../context/plantMainImageContext";

const useMainPlantContainer = () => {
  useContext(plantMainImageContext);
};

export default useMainPlantContainer;
