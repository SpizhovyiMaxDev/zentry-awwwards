import clsx from "clsx";

interface FeaturedCardProps {
  title: string;
  description: string;
  bgVideoSrc: string;
  videoClassName?: string;
  isComingSoon: boolean;
}

function FeaturedCard({
  title,
  description,
  bgVideoSrc,
  isComingSoon,
  videoClassName,
}: FeaturedCardProps) {
  return (
    <div className="relative mb-7 h-[30rem] w-full overflow-hidden rounded-md border border-white/20 duration-[0.2s] md:h-[65vh]">
      <video
        src={bgVideoSrc}
        className={clsx(
          videoClassName,
          "absolute top-0 left-0 z-0 size-full object-cover",
        )}
        muted
        loop
        autoPlay
      />
      <div className="relative z-10 p-5 text-blue-50">
        <h1 className="font-zentry mb-5 text-4xl font-bold tracking-wide md:text-6xl">
          {title}
        </h1>
        <p className="font-circular-web max-w-64 text-xs leading-[1.5] font-light md:text-sm">
          {description}
        </p>
      </div>
      {isComingSoon && (
        <button className="background-black rounded-xl uppercase">
          Coming Soon
        </button>
      )}
    </div>
  );
}

export default FeaturedCard;
