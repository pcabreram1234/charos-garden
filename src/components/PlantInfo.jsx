import React from "react";
import plantInforBackground from "../assets/images/backGroundTittle.png";
import plantInfoBackgroundResponsive from "../assets/images/backGroundTittleResponsive.png";
import UseFlowerCatalog from "../hooks/useFlowerCatalog";
import useMatchMedia from "../utils/matchMedia";
import "../styles/PlantInfo.css";
const PlantInfo = (props) => {
  const matchMediaLarge = useMatchMedia("(min-width: 1280px)");
  const matchMediaSmall = useMatchMedia(
    "(min-width:320px) and (max-height:570px)"
  );

  const styleLargeResponsive = {
    backgroundImage: "url(" + plantInforBackground + ")",
    backgroundSize: "cover",
    height: "98vh",
    backgroundPositionY: "16px",
  };

  const styleNormalResponsive = {
    backgroundImage: "url(" + plantInfoBackgroundResponsive + ")",
    backgroundSize: "cover",
    height: "100vh",
    backgroundPositionY: "0px",
    padding: "40px",
  };

  const styleSmallResponsive = {
    backgroundImage: "url(" + plantInfoBackgroundResponsive + ")",
    backgroundSize: "cover",
    height: "100vh",
    backgroundPositionY: "0px",
    padding: "0",
  };

  const handleMatchMedia = () => {
    if (matchMediaLarge) {
      return styleLargeResponsive;
    }
    if (matchMediaSmall) {
      return styleSmallResponsive;
    } else {
      return styleNormalResponsive;
    }
  };

  return (
    <div className="PlantInfo__Container" style={handleMatchMedia()}>
      {<span>{props.detail}</span>}
    </div>
  );
};

export default PlantInfo;
