import IconButtonWrapper from "../icon-button-wrapper/icon-button-wrapper";
import React from "react";
import { useCarouselContext } from "../../shared/hooks";

type Props = {
  children: React.ReactNode | string | React.ReactElement;
};

function CarouselPrev({ children }: Props) {
  const { prev, currentId } = useCarouselContext();
  return (
    <IconButtonWrapper
      disabled={currentId <= 0}
      extendedClassNames=" disabled:opacity-0 absolute z-10 left-0 bottom-0 transform  xl:-translate-1/2 -translate-0 hover:bg-[var(--primary-theme)] bg-[var(--primary-theme)] p-2 rounded-[50%] md:bg-transparent"
      onClick={prev}
    >
      {children}
    </IconButtonWrapper>
  );
}

export default CarouselPrev;
