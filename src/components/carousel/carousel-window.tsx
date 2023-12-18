import React from "react";
import { useCarouselContext } from "../../shared/hooks";

type Props = {
  children: React.ReactNode;
  extendedClassNames: string;
};

function CarouselWindow({ children, extendedClassNames }: Props) {
  const { currentId, items } = useCarouselContext();
  return (
    <div className=" relative w-full lg:w-4/5  xl:w-3/5  mx-auto ">
      <div className=" flex flex-col items-center justify-center space-y-2 pb-8 text-center">
        <p>
          You have answered {currentId + 1} of {items.length} question
          categories
        </p>
        <div className="w-full bg-primary-400 rounded-md mt-5 ">
          <div
            className="bg-primary-200 h-2 rounded-lg"
            style={{ width: `${((currentId + 1) / items.length) * 100}%` }}
          ></div>
        </div>
      </div>
      {children}

      <div className={extendedClassNames}>{items?.at(currentId)}</div>
    </div>
  );
}

export default CarouselWindow;
