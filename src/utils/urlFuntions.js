import { useParams } from "react-router";

export const returnUrlParams = () => {
  let { id } = useParams();
  console.log(id);
  return id;
};
