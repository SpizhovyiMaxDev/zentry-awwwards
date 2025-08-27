import { PARTNERS_ITEMS } from "../data/partners";
import PartnerItem from "../ui/PartnerItem";
import parse from "html-react-parser";

function Partners() {
  return (
    <section className="bg-black py-36">
      <div className="mx-auto grid max-w-[70rem] justify-center gap-16 px-8 sm:grid-cols-2 sm:gap-5">
        <div className="xs:text-md max-w-[30rem] text-sm text-gray-400 lg:text-lg">
          {parse(PARTNERS_ITEMS[0]?.description || "")}
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
