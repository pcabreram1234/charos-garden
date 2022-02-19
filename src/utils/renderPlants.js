import React from "react";

function renderPlants(items, cb) {
  const result = items.map((el) => {
    return (
      <div
        key={el.id}
        className="thumbnails"
        onClick={() => {
          return cb(el.src, el.title, el.id);
        }}
      >
        <img src={el.src} alt="" name={el.name} />
      </div>
    );
  });

  return result;
}

export default renderPlants;
