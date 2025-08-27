import type { PartnerType } from "../data/partners";

interface PartnerItemProps {
  partner: PartnerType;
  idx?: number;
}

function PartnerItem({ partner, idx }: PartnerItemProps) {
  const isAnimateItem = partner.name !== "Our Partners";

  return (
    <li className="grid grid-cols-[1fr_4fr] gap-3.5" data-idx={idx}>
      <span
        className={`${isAnimateItem ? "animated-partner-subheading" : ""} ${idx === 0 ? "text-grey-400" : ""} font-general text-center text-xs font-light uppercase`}
      >
        {partner.category}
      </span>
      <div>
        <h3
          className={`${isAnimateItem ? "animated-partner-heading" : ""} ${idx === 0 ? "text-yellow-500" : ""} font-zentry text-2xl tracking-wide text-blue-50 uppercase sm:text-3xl md:text-4xl lg:text-5xl`}
        >
          {partner.name}
        </h3>
      </div>
    </li>
  );
}

export default PartnerItem;
