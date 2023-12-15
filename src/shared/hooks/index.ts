import { CarouselContext } from "../../components/carousel";
import { useContext } from "react";

export function useCarouselContext() {
  const context = useContext(CarouselContext);
  if (!context)
    throw new Error(
      "The carousel context is being used outside of its provider"
    );
  return context;
}
