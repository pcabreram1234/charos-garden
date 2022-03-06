import { useParams } from "react-router";

export const returnUrlParams = () => {
  let { id } = useParams();
  return id;
};
