import { PARTNERS_ITEMS } from "../data/partners";
import PartnerItem from "../ui/PartnerItem";
import parse from "html-react-parser";
import { useState } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Partners() {
  const [activePartnerIndex, setActivePartnerIndex] = useState(0);

  useGSAP(() => {
    const colors = ["rgb(239 246 255)", "rgb(156 163 175)", "rgb(234 179 8)"];
    gsap.utils
      .toArray<HTMLElement>(
        ".animated-partner-subheading, .animated-partner-heading",
      )
      .forEach((element) => {
        const initialColor = element.classList.contains(
          "animated-partner-heading",
        )
          ? colors[0]
          : colors[1];

        gsap.fromTo(
          element,
          { color: initialColor },
          {
            scrollTrigger: {
              trigger: element,
              start: "top center",
              end: "bottom center",
              toggleActions: "play none none none",
              onEnter: () => {
                gsap.to(element, { color: colors[2] });
                const partnerItem = element.closest("li[data-idx]");
                if (partnerItem) {
                  const idx = parseInt(
                    partnerItem.getAttribute("data-idx") || "0",
                  );
                  setActivePartnerIndex(idx);
                }
              },
              onLeave: () => {
                gsap.to(element, { color: initialColor });
              },
              onEnterBack: () => {
                gsap.to(element, { color: colors[2] });

                const partnerItem = element.closest("li[data-idx]");
                if (!partnerItem) return;

                const idx = parseInt(
                  partnerItem.getAttribute("data-idx") || "0",
                );
                setActivePartnerIndex(idx);
              },
              onLeaveBack: () => {
                gsap.to(element, { color: initialColor });
              },
            },
          },
        );
      });
  });

  return (
    <section className="bg-black py-36">
      <div className="mx-auto grid max-w-[70rem] justify-center gap-16 px-8 sm:grid-cols-2 sm:gap-5">
        <div className="max-w-[30rem]">
          <div className="xs:text-md sticky top-1/2 -translate-y-1/2 text-sm text-gray-400 lg:text-lg">
            {parse(PARTNERS_ITEMS[activePartnerIndex]?.description || "")}
          </div>
        </div>
        <ul className="max-w-[28rem]">
          <PartnerItem
            partner={{ name: "Our Partners", category: "", description: "" }}
            index={-1}
            key="Our Partners"
          />
          {PARTNERS_ITEMS.map((partner, index) => (
            <PartnerItem partner={partner} key={partner.name} index={index} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Partners;
