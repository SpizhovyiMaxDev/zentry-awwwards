import { useEffect } from "react";
import Lenis from "lenis";

export function useSmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Controls how smooth the scrolling is (higher = smoother but slower)
      orientation: "vertical",
      smoothWheel: true, // Smooth mouse wheel scrolling
      wheelMultiplier: 1.4, // Controls scroll speed (lower = slower scrolling)
      touchMultiplier: 2, // Touch scroll sensitivity
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
}
