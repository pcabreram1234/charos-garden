const fetchFlowers = async (API) => {
  try {
    const send = await fetch(API);
    const data = send.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchFlowers;
