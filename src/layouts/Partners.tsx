import { PARTNERS_ITEMS } from "../data/partners";
import PartnerItem from "../ui/PartnerItem";
import parse from "html-react-parser";
import { useState } from "react";
import { usePartnersScrollAnimation } from "../hooks/usePartnersScrollAnimation";

function Partners() {
  const [activePartnerIndex, setActivePartnerIndex] = useState(0);

  usePartnersScrollAnimation({
    setActivePartnerIndex,
    totalPartners: PARTNERS_ITEMS.length,
  });

  return (
    <section className="bg-black py-36">
      <div className="mx-auto grid max-w-[70rem] justify-center gap-16 px-8 sm:grid-cols-2 sm:gap-5">
        <div className="max-w-[30rem]">
          <div className="xs:text-md sticky top-1/2 -translate-y-1/2 text-sm text-gray-400 lg:text-lg">
            {parse(PARTNERS_ITEMS[activePartnerIndex].description || "")}
          </div>
        </div>
        <ul className="max-w-[28rem] space-y-2">
          <PartnerItem
            partner={{ name: "Our Partners", category: "", description: "" }}
            idx={-1}
            key="Our Partners"
          />
          {PARTNERS_ITEMS.map((partner, index) => (
            <PartnerItem partner={partner} key={partner.name} idx={index} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Partners;
