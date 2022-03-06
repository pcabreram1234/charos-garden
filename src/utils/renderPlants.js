import React from "react";
import { Scroll } from "../utils/scroll";
function renderPlants(items, cb) {
  const result = items.map((el) => {
    return (
      <div
        key={el.id}
        className="thumbnails"
        onClick={() => {
          Scroll();
          return cb(el.src, el.title, el.id, el.detail);
        }}
      >
        <img src={el.src} alt="" name={el.name} />
      </div>
    );
  });

  return result;
}

export default renderPlants;
