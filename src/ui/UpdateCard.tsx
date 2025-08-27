import type { Update } from "../data/updates";
import { useParallaxEffect } from "../hooks/useParallaxEffect";

interface UpdateCardProps {
  update: Update;
}

function UpdateCard({ update }: UpdateCardProps) {
  const { containerRef, targetRef, handleMouseMove, handleMouseLeave } =
    useParallaxEffect<HTMLImageElement>({
      tiltX: 16,
      tiltY: -16,
      perspective: 1200,
      resetOnLeave: true,
    });

  return (
    <a href={update.link} target="_blank">
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div
          ref={targetRef}
          className="mb-8 overflow-hidden rounded-2xl border-2"
        >
          <img src={update.image} alt={update.alt} />
        </div>
      </div>

      <div className="flex flex-row items-start gap-16">
        <p className="text-xs font-semibold">{update.date}</p>
        <p className="font-circular-web text-md mb-5 max-w-100 text-black transition-all sm:text-xl lg:text-2xl">
          {update.title}
        </p>
      </div>
    </a>
  );
}

export default UpdateCard;
