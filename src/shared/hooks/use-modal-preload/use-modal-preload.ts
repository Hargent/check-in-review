import { useEffect, useState } from "react";

export function useModalPreload(duration: number): boolean {
  const [isModalLoading, setIsModalLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsModalLoading(false);
    }, duration);

    // Clear the timeout when the component unmounts or when the duration changes.
    return () => {
      clearTimeout(timeoutId);
    };
  }, [duration]);

  return isModalLoading;
}
