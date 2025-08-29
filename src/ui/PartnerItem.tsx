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
        className={`${isAnimateItem ? "animated-partner-subheading" : ""} font-general text-center text-xs font-light uppercase`}
        data-initial-color={idx === 0 ? "yellow" : "gray"}
      >
        {partner.category}
      </span>
      <div>
        <h3
          className={`${isAnimateItem ? "animated-partner-heading" : ""} ${idx === -1 ? "text-blue-50" : ""} font-zentry text-2xl tracking-wide uppercase sm:text-3xl md:text-4xl lg:text-5xl`}
          data-initial-color={idx === 0 ? "yellow" : "blue"}
        >
          {partner.name}
        </h3>
      </div>
    </li>
  );
}

export default PartnerItem;
