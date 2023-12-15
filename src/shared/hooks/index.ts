import type { AppDispatch, RootState } from "../../redux/index";
import { useDispatch, useSelector } from "react-redux";

import { CarouselContext } from "../../components/carousel";
import type { TypedUseSelectorHook } from "react-redux";
import { useContext } from "react";

export function useCarouselContext() {
  const context = useContext(CarouselContext);
  if (!context)
    throw new Error(
      "The carousel context is being used outside of its provider"
    );
  return context;
}

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
