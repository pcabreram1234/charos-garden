import React from "react";

function renderItemsCarousel(items, cb) {
  const result = items.map((el) => {
    return (
      <div
        className="item_Container"
        key={el.id}
        onClick={() => {
          cb(el.detail, el.src, el.name);
        }}
      >
        <img src={el.src} alt="" />
      </div>
    );
  });

  return result;
}

export default renderItemsCarousel;
