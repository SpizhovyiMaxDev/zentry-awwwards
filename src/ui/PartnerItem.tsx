import type { PartnerType } from "../data/partners";

interface PartnerItemProps {
  partner: PartnerType;
}

function PartnerItem({ partner }: PartnerItemProps) {
  return (
    <li className="grid grid-cols-[1fr_4fr] gap-3.5">
      <span className="font-general text-center text-xs font-light text-gray-400 uppercase">
        {partner.category}
      </span>
      <h3 className="font-zentry text-2xl tracking-wide text-blue-50 uppercase sm:text-3xl md:text-4xl lg:text-5xl">
        {partner.name}
      </h3>
    </li>
  );
}

export default PartnerItem;
