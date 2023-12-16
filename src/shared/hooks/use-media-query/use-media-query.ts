import { useEffect, useState } from "react";

const useMediaQuery = ({
  screen,
  type
}: {
  screen: string;
  type: "min" | "max";
}): boolean => {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const query = `(${type}-width: ${screen})`;
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    listener();
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, screen, type]);
  return matches;
};

export default useMediaQuery;
