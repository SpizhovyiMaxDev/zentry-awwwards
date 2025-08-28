import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import type { Dispatch, SetStateAction } from "react";

interface UsePartnersScrollAnimationProps {
  setActivePartnerIndex: Dispatch<SetStateAction<number>>;
  totalPartners: number;
}

export function usePartnersScrollAnimation({
  setActivePartnerIndex,
  totalPartners,
}: UsePartnersScrollAnimationProps) {
  useGSAP(() => {
    const colors = ["rgb(239 246 255)", "rgb(156 163 175)", "rgb(234 179 8)"];

    function getPartnerElement(element: HTMLElement) {
      return element.closest("li[data-idx]") as HTMLElement;
    }

    function getPartnerIndex(element: HTMLElement) {
      const partnerItem = getPartnerElement(element);
      return partnerItem ? parseInt(partnerItem.dataset.idx || "0") : 0;
    }

    function getInitialColor(element: HTMLElement) {
      const initialColorType = element.dataset.initialColor;
      const elementType = element.classList.contains("animated-partner-heading")
        ? "heading"
        : "subheading";

      if (initialColorType === "yellow") return colors[2];
      if (initialColorType === "blue") return colors[0];
      if (initialColorType === "gray") return colors[1];

      return elementType === "heading" ? colors[0] : colors[1];
    }

    function createScrollTriggerConfig(element: HTMLElement) {
      const partnerItem = getPartnerElement(element);
      const idx = getPartnerIndex(element);

      return {
        trigger: element,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none none",
        onEnter: () => {
          gsap.to(element, { color: colors[2] });
          if (partnerItem) {
            setActivePartnerIndex(idx);
          }
        },
        onLeave: () => {
          if (!partnerItem || idx === totalPartners - 1) return;
          gsap.to(element, { color: colors[0] });
        },
        onEnterBack: () => {
          gsap.to(element, { color: colors[2] });
          if (partnerItem) {
            setActivePartnerIndex(idx);
          }
        },
        onLeaveBack: () => {
          if (!partnerItem || !idx) return;
          gsap.to(element, { color: colors[0] });
        },
      };
    }

    gsap.utils
      .toArray<HTMLElement>(
        ".animated-partner-subheading, .animated-partner-heading",
      )
      .forEach((element) => {
        const initialColor = getInitialColor(element);

        gsap.fromTo(
          element,
          { color: initialColor },
          {
            scrollTrigger: createScrollTriggerConfig(element),
          },
        );
      });
  });
}
