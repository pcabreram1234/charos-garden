import React from "react";
import Title from "../components/title";
import PrincipalImage from "../components/principalImage";
import "../styles/mainContainer.css";

const Home = () => {
  return (
    <div className="mainContainer">
      <Title />
      <PrincipalImage />
    </div>
  );
};

export default Home;
