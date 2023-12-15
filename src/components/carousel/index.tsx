import React, { createContext, useState } from "react";

import CarouselItems from "./carousel-items";
import CarouselNext from "./carousel-next";
import CarouselPrev from "./carousel-prev";
import CarouselWindow from "./carousel-window";

// import CarouselItem from "./carousel-item";

type Props = {
  children: React.ReactNode;
};
type CarouselContextType = {
  currentId: number;

  next: () => void;
  prev: () => void;
  items: React.ReactNode[];

  handleSetItems: (items: React.ReactNode[]) => void;
};
export const CarouselContext = createContext<CarouselContextType | null>(null);
function Carousel({ children }: Props) {
  const [items, setItems] = useState<React.ReactNode[]>([]);
  const [currentId, setCurrentId] = useState<number>(
    items.length > 0 ? items.length : 1
  );

  const next = () => {
    // console.log("setting id: ", currentId);
    const nextCondition = currentId + 1 >= items.length;

    if (nextCondition) return;
    setCurrentId((id: number): number => (id += 1));
  };
  const prev = () => {
    const prevCondition = currentId === 0;
    if (prevCondition) return;

    // console.log("setting id: ", currentId);
    setCurrentId((id: number): number => (id -= 1));
  };
  const handleSetItems = (items: React.ReactNode[]) => {
    setItems(items);
  };
  return (
    <CarouselContext.Provider
      value={{
        next,
        prev,
        currentId,
        handleSetItems,
        items
      }}
    >
      {children}
    </CarouselContext.Provider>
  );
}

Carousel.Items = CarouselItems;
Carousel.Next = CarouselNext;
Carousel.Prev = CarouselPrev;
Carousel.Window = CarouselWindow;

export default Carousel;
