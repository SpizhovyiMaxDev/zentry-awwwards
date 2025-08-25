import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export function useFeatureCardsScrollAnimation() {
  useGSAP(() => {
    gsap.utils.toArray<HTMLDivElement>(".feature-card").forEach((card) => {
      gsap.fromTo(
        card,
        {
          y: 30,
          rotateX: -10,
          opacity: 0,
        },
        {
          duration: 1.5,
          rotateX: 0,
          y: 0,
          transformPerspective: 5000,
          transformOrigin: "center top",
          opacity: 1,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "top 90%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });
  });
}
