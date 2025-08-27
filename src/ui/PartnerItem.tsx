import type { PartnerType } from "../data/partners";

interface PartnerItemProps {
  partner: PartnerType;
  index?: number;
}

function PartnerItem({ partner, index }: PartnerItemProps) {
  const isAnimateItem = partner.name !== "Our Partners";

  return (
    <li className="grid grid-cols-[1fr_4fr] gap-3.5" data-idx={index}>
      <span
        className={`${isAnimateItem ? "animated-partner-subheading" : ""} font-general text-center text-xs font-light uppercase`}
      >
        {partner.category}
      </span>
      <div>
        <h3
          className={`${isAnimateItem ? "animated-partner-heading" : ""} font-zentry text-2xl tracking-wide text-blue-50 uppercase sm:text-3xl md:text-4xl lg:text-5xl`}
        >
          {partner.name}
        </h3>
      </div>
    </li>
  );
}

export default PartnerItem;
