import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

interface UsePolygonAnimationProps {
  triggerSelector: string;
  targetSelector: string;
}

export function usePolygonAnimation({
  triggerSelector,
  targetSelector,
}: UsePolygonAnimationProps) {
  useGSAP(() => {
    gsap.fromTo(
      targetSelector,
      {
        y: 100,
        opacity: 0,
        rotateX: 100,
        transformOrigin: "center bottom",
      },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: triggerSelector,
          start: "top 85%",
          end: "top 85%",
          toggleActions: "play none none reverse",
        },
      },
    );
  });
}
