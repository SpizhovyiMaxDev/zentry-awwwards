import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function useAnimatedTitle() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "100 bottom",
          end: "100 bottom",
          toggleActions: "play none none reverse", // onEnter | onLeave | onEnterBack | onLeaveBack
        },
      });

      titleAnimation.to(".animated-word", {
        opacity: 1,
        transform: "translate3d(0,0,0) rotateY(0deg) rotateX(0deg)",
        ease: "power2.inOut",
        stagger: 0.05,
      });
    },
    {
      scope: containerRef,
      dependencies: [],
    },
  );

  return { containerRef };
}
