import IconButtonWrapper from "../icon-button-wrapper/icon-button-wrapper";
import React from "react";
import { useCarouselContext } from "../../shared/hooks";

type Props = {
  children: React.ReactNode | string | React.ReactElement;
  extendedClassNames: string;
};

function CarouselPrev({ children, extendedClassNames }: Props) {
  const { prev, currentId } = useCarouselContext();
  return (
    <IconButtonWrapper
      disabled={currentId <= 0}
      extendedClassNames={extendedClassNames}
      onClick={prev}
      isBorder={true}
    >
      {children}
    </IconButtonWrapper>
  );
}

export default CarouselPrev;
