async function useFetchDetail(id) {
  const fetching = await fetch(`http://localhost:3000/Plants?id=${id}`);
  const response = await fetching.json();
  return response;
}

export default useFetchDetail;
