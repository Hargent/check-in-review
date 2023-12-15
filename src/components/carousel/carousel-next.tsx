import IconButtonWrapper from "./../icon-button-wrapper/icon-button-wrapper";
import React from "react";
import { useCarouselContext } from "../../shared/hooks";

type Props = {
  children: React.ReactNode | string | React.ReactElement;
};

function CarouselNext({ children }: Props) {
  const { next, currentId, items } = useCarouselContext();

  return (
    <IconButtonWrapper
      disabled={currentId >= items.length - 1}
      extendedClassNames="disabled:opacity-0 disabled:cursor-not-allowed absolute z-10 right-0 bottom-0 transform  md:-translate-1/2 -translate-0 hover:bg-[var(--tertiary-theme)] bg-[var(--tertiary-theme)] p-2 rounded-[50%] md:bg-transparent "
      onClick={next}
    >
      {children}
    </IconButtonWrapper>
  );
}

export default CarouselNext;
