const fetchFlowers = async (API) => {
  try {
    const send = await fetch(API);
    const data = send.json();
    let matrix = [];
/*     data.forEach((e) => {
      matrix = [...e];
    }); */
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchFlowers;
