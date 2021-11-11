import { useState, useEffect } from "react";

const useFetchProduct = (id) => {
  const [image, setImages] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/Plants?id=${id}`)
      .then((response) => response.json())
      .then((data) => {
        setImages(data);
      });
  }, []);
  return image;
};
export default useFetchProduct;
