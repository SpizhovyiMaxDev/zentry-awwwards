import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export function useAboutScrollAnimation() {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "top top",
        end: "bottom center",
        scrub: 2,
        pin: true,
      },
    });

    clipAnimation.to("#about-image-wrapper", {
      width: "100vw",
      height: "100vh",
      maxWidth: "auto",
      top: 0,
      border: 0,
      borderRadius: 0,
    });
  });
}
