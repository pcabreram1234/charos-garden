import React, { useState, useEffect } from "react";
import plantInforBackground from "../assets/images/backGroundTittle.png";
import useFetchDetail from "../hooks/useFetchDetail";
import "../styles/PlantInfo.css";
const PlantInfo = (props) => {
  const [detail, setDetail] = useState("");

  const currentWindowWidth = window.matchMedia("(max-width: 1280px)");

  const style = {
    backgroundImage: "url(" + plantInforBackground + ")",
    backgroundSize: "cover",
    height: currentWindowWidth ? "98vh" : "100vh",
    backgroundPositionY: "16px",
  };

  useEffect(() => {
    useFetchDetail(props.id).then((data) => {
      setDetail(data[0].detail);
    });
  }, [detail]);

  return (
    <div className="PlantInfo__Container" style={style}>
      {<span>{detail}</span>}
    </div>
  );
};

export default PlantInfo;
