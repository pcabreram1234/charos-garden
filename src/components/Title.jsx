import React from "react";
import "../styles/Title.css";
import KnowMoreButton from "./knowMoreButton";

const Title = () => {
  return (
    <div className="title">
      <h1>Charos Garden</h1>
      <p>
        Con amor para ti, donde encontrarás las mejores flores, plantas,
        tratamientos, y demás para tu jardín
      </p>
      <KnowMoreButton />
    </div>
  );
};

export default Title;
