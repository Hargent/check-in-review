import React, { createContext, useEffect, useState } from "react";

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
  animDir: "left" | "right" | "";
  isTheEnd: boolean;
};
export const CarouselContext = createContext<CarouselContextType | null>(null);
function Carousel({ children }: Props) {
  const [items, setItems] = useState<React.ReactNode[]>([]);

  const [animDir, setAnimDir] = useState<"left" | "right" | "">("");
  const [currentId, setCurrentId] = useState<number>(0);
  // const [currentId, setCurrentId] = useState<number>(
  //   items.length > 0 ? items.length : 1
  // );
  // custom usage
  const [isTheEnd, setIsTheEnd] = useState(false);
  useEffect(() => {
    // (items, currentId);
    if (currentId === items.length - 1) {
      setIsTheEnd(true);
    }
  }, [currentId, items]);

  const next = () => {
    const nextCondition = currentId + 1 >= items.length;

    if (nextCondition) {
      return;
    }
    setAnimDir("right");
    setCurrentId((id: number): number => (id += 1));
    // setIsTheEnd(false);
  };
  const prev = () => {
    const prevCondition = currentId === 0;
    if (prevCondition) return;

    setAnimDir("left");

    setCurrentId((id: number): number => (id -= 1));
  };
  const handleSetItems = (items: React.ReactNode[]) => {
    setItems(items);
  };
  return (
    <CarouselContext.Provider
      value={{
        animDir,
        isTheEnd,
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
