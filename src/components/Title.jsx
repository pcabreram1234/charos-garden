import React from "react";
import "../styles/Title.css";
import KnowMoreButton from "./knowMoreButton";

const Title = () => {
  return (
    <div className="title">
      <h1>Charo`s Garden</h1>
      <p>
        With love for you, where you will find the best flowers, plants,
        treatments and more for your garden
      </p>
      <KnowMoreButton />
    </div>
  );
};

export default Title;
