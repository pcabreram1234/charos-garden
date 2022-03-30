import React from "react";
import { Scroll } from "../utils/scroll";

function renderItemsCarousel(items, cb) {
  const result =  items.map((el) => {
    return (
      <div
        className="item_Container"
        key={el.id}
        onClick={() => {
          cb(el.detail, el.src, el.name, el.detail);
          Scroll();
        }}
      >
        <img src={el.src} alt="" />
      </div>
    );
  });

  return result;
}

export default renderItemsCarousel;
