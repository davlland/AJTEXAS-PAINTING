import { useEffect, useState } from "react";

export function useScrollListener(threshold = 0) {
  const [scrollY, setScrollY] = useState(window.scrollY);
  const [passed, setPassed] = useState(window.scrollY > threshold);

  useEffect(() => {
    function onScroll() {
      setScrollY(window.scrollY);
      setPassed(window.scrollY > threshold);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return { scrollY, passed };
}
