import { ReactElement, ReactNode, useEffect } from "react";

import { useCarouselContext } from "../../shared/hooks";

type Props = {
  children: ReactNode[] | ReactElement[] | string[];
};

function CarouselItems({ children }: Props) {
  // set number of items
  // create carousel items
  const { handleSetItems } = useCarouselContext();

  useEffect(() => {
    handleSetItems?.(children);
  }, [children, handleSetItems]);
  return <></>;
}

export default CarouselItems;
