import { useMediaQuery } from "react-responsive";

export default function useMatchMedia(media) {
  return useMediaQuery({ query: media });
}
