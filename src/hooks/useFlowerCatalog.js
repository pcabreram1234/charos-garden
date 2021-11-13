import { useState, useEffect } from "react";

const UseFlowerCatalog = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/Plants")
      .then((response) => response.json())
      .then((data) => {
        setImages(data);
      });
  }, []);
  return images;
};

export default UseFlowerCatalog;
