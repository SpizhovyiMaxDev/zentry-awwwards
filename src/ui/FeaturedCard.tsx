import clsx from "clsx";
import { useRef, type MouseEvent } from "react";
import { TiLocationArrow } from "react-icons/ti";

interface FeaturedCardProps {
  title?: string;
  description?: string;
  bgVideoSrc?: string;
  videoClass?: string;
  containerClass?: string;
  isComingSoon?: boolean;
  playVideo?: boolean;
}

function FeaturedCard({
  title,
  description,
  bgVideoSrc,
  isComingSoon,
  videoClass,
  containerClass,
  playVideo,
}: FeaturedCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  function handleMouseMove(e: MouseEvent) {
    const card = cardRef.current;
    if (!card) return;

    const { top, left, width, height } = card.getBoundingClientRect();

    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 8;
    const tiltY = (relativeX - 0.5) * -8;

    const newTransform = `perspective(1200px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    if (cardRef.current) {
      cardRef.current.style.transform = newTransform;
    }
  }

  function handleMouseEnter() {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }

  function handleMouseLeave() {
    if (videoRef.current && !playVideo) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    const newTransform = `perspective(1200px) rotateX(0deg) rotateY(0deg)`;
    if (cardRef.current) {
      cardRef.current.style.transform = newTransform;
    }
  }

  return (
    <div className={`feature-card ${containerClass}`}>
      <div
        ref={cardRef}
        className={`relative flex size-full origin-center cursor-grab flex-col justify-between gap-2 overflow-hidden rounded-md border border-white/20 transition-all hover:scale-98 ${
          isComingSoon ? "bg-violet-300" : "bg-black"
        }`}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {bgVideoSrc && (
          <video
            ref={videoRef}
            src={bgVideoSrc}
            className={clsx(
              videoClass,
              "pointer-events-none absolute top-0 left-0 z-0 size-full object-cover",
            )}
            muted
            loop
            autoPlay={playVideo}
          />
        )}
        <div
          className={`relative z-10 p-5 ${isComingSoon ? "text-black" : "text-blue-50"}`}
        >
          {title && (
            <h1
              className={`font-zentry max-w-10 text-4xl font-bold tracking-wide ${isComingSoon ? "md:text-7xl" : "md:text-6xl"}`}
            >
              {title}
            </h1>
          )}
          {description && (
            <p className="font-circular-web mt-5 max-w-64 text-sm leading-[1.5] font-light text-shadow-md md:text-lg">
              {description}
            </p>
          )}
        </div>
        {isComingSoon && (
          <div className="p-2.5 text-right">
            <button className="background-black rounded-xl uppercase">
              <TiLocationArrow className="h-15 w-15" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default FeaturedCard;
