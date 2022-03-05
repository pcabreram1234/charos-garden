import React from "react";
import { Link } from "react-router-dom";
import "../styles/KnowMoreButton.css";

const KnowMoreButton = () => {
  return <Link className="KnowMoreButton" to={"/Flowers"}>Saber Mas</Link>;
};

export default KnowMoreButton;
