import { useState, useEffect } from "react";

const useInitialState = (API) => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        setImages(data);
      });
  }, []);
  return images;
};

export default useInitialState;
