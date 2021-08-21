import React from "react";
import Navabar from "../components/navbar";
import Title from "../components/title";
import PrincipalImage from "../components/principalImage";
import "../styles/mainContainer.css";

const Home = () => {
  return (
    <div>
      <Navabar />
      <div className="mainContainer">
        <Title />
        <PrincipalImage />
      </div>
    </div>
  );
};

export default Home;
