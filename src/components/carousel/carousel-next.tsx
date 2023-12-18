import IconButtonWrapper from "./../icon-button-wrapper/icon-button-wrapper";
import React from "react";
import { useCarouselContext } from "../../shared/hooks";

type Props = {
  children: React.ReactNode | string | React.ReactElement;
  extendedClassNames: string;
};

function CarouselNext({ children, extendedClassNames }: Props) {
  const { next, currentId, items } = useCarouselContext();

  return (
    <IconButtonWrapper
      isBorder={true}
      disabled={currentId >= items.length - 1}
      extendedClassNames={extendedClassNames}
      onClick={next}
    >
      {children}
    </IconButtonWrapper>
  );
}

export default CarouselNext;
