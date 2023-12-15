import React from "react";
import { useCarouselContext } from "../../shared/hooks";

type Props = {
  children: React.ReactNode;
  extendedClassNames: string;
};

function CarouselWindow({ children, extendedClassNames }: Props) {
  const { currentId, items } = useCarouselContext();
  console.log(currentId, "This is the currentId");

  return (
    <div className=" relative w-full lg:w-4/5  xl:w-3/5 ">
      {children}

      <div className={extendedClassNames}>{items?.at(currentId)}</div>
    </div>
  );
}

export default CarouselWindow;
