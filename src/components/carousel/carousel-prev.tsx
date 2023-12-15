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
      extendedClassNames=" absolute z-10 left-0 top-1/2 transform -translate-y-1/2 xl:-translate-1/2 -translate-x-0 hover:bg-[var(--tertiary-theme)] bg-[var(--tertiary-theme)] p-2 rounded-[50%] md:bg-transparent"
      onClick={prev}
    >
      {children}
    </IconButtonWrapper>
  );
}

export default CarouselPrev;
