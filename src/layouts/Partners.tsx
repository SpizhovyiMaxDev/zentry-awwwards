import { PARTNERS_ITEMS } from "../data/partners";
import PartnerItem from "../ui/PartnerItem";
import parse from "html-react-parser";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Partners() {
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
              toggleActions: "play none none reverse",
              // markers: true,
              onEnter: () => {
                gsap.to(element, { color: colors[2] });
              },
              onLeave: () => {
                gsap.to(element, { color: initialColor });
              },
              onEnterBack: () => {
                gsap.to(element, { color: colors[2] });
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
            {parse(PARTNERS_ITEMS[0].description)}
          </div>
        </div>
        <ul className="max-w-[28rem]">
          <PartnerItem
            partner={{ name: "Our Partners", category: "", description: "" }}
            key="Our Partners"
          />
          {PARTNERS_ITEMS.map((partner) => (
            <PartnerItem partner={partner} key={partner.name} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Partners;
