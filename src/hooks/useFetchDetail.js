async function useFetchDetail(id,API) {
  const fetching = await fetch(`${API}?id=${id}`);
  const response = await fetching.json();
  return response;
}

export default useFetchDetail;
