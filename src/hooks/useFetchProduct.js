import { useState, useEffect } from "react";

const useFetchProduct = (id,API) => {
  const [image, setImages] = useState([]);
  useEffect(() => {
    fetch(`${API}?id=${id}`)
      .then((response) => response.json())
      .then((data) => {
       setImages(data);
      });
  }, []);
  return image;
};
export default useFetchProduct;
