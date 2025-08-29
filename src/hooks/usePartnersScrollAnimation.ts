import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, type Dispatch, type SetStateAction } from "react";
import { useMobileSyncSize } from "./useMobileSyncSize";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

interface UsePartnersScrollAnimationProps {
  setActivePartnerIndex: Dispatch<SetStateAction<number>>;
  totalPartners: number;
}

export function usePartnersScrollAnimation({
  setActivePartnerIndex,
  totalPartners,
}: UsePartnersScrollAnimationProps) {
  const isMobile = useMobileSyncSize();
  const isMobileRef = useRef(isMobile);

  useEffect(() => {
    isMobileRef.current = isMobile;
  }, [isMobile]);

  /*
    ** -- Usefull reminder for future sel -- **
    ScrollTrigger Persistence: ScrollTrigger instances persist 
    across re-renders and don't automatically update their callback 
    functions when dependencies change. The callbacks
    are set once when the ScrollTrigger is created and remain fixed.
    so to get latest state values 
  */

  useGSAP(() => {
    const colors = ["#eff6ff", "#9ca3af", "#fcd34d"];

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
        onEnter: () => {
          gsap.to(element, { color: colors[2] });
          if (partnerItem) {
            setActivePartnerIndex(isMobileRef.current ? 0 : idx);
          }
        },
        onLeave: () => {
          if (!partnerItem || idx === totalPartners - 1) return;
          gsap.to(element, { color: colors[0] });
        },
        onEnterBack: () => {
          gsap.to(element, { color: colors[2] });
          if (partnerItem) {
            setActivePartnerIndex(isMobileRef.current ? 0 : idx);
          }
        },
        onLeaveBack: () => {
          if (!partnerItem || !idx) return;
          gsap.to(element, { color: colors[0] });
        },
      };
    }

    function getPartnerIndex(element: HTMLElement) {
      const partnerItem = getPartnerElement(element);
      return partnerItem ? parseInt(partnerItem.dataset.idx || "0") : 0;
    }

    function getPartnerElement(element: HTMLElement) {
      return element.closest("li[data-idx]") as HTMLElement;
    }
  });
}
