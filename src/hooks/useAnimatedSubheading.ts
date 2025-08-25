import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function useAnimatedSubheading() {
  const subHeadingRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const subHeading = subHeadingRef.current;
      if (!subHeading) return;

      const subHeadingAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: subHeading,
          start: "top 90%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      subHeadingAnimation.fromTo(
        ".animated-subheading-word",
        {
          opacity: 0,
          x: -20,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
        },
      );
    },
    {
      scope: subHeadingRef,
      dependencies: [],
    },
  );

  return { subHeadingRef };
}
