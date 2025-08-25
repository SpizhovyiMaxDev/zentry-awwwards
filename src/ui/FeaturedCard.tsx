import clsx from "clsx";
import { useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { useParallaxEffect } from "../hooks/useParallaxEffect";

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
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const { containerRef, targetRef, handleMouseMove, handleMouseLeave } =
    useParallaxEffect({
      tiltX: 10,
      tiltY: -10,
      perspective: 1200,
      resetOnLeave: true,
    });

  function handleMouseEnter() {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }

  function handleCardMouseLeave() {
    if (videoRef.current && !playVideo) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }

    // Call the parallax hook's mouse leave handler
    handleMouseLeave();
  }

  return (
    <div className={`feature-card ${containerClass}`}>
      <div
        ref={containerRef}
        className="size-full transition-transform duration-500 hover:scale-95"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleCardMouseLeave}
      >
        <div
          ref={targetRef}
          className={`relative flex size-full origin-center cursor-grab flex-col justify-between gap-2 overflow-hidden rounded-md border border-white/20 ${
            isComingSoon ? "bg-violet-300" : "bg-black"
          }`}
          onMouseEnter={handleMouseEnter}
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
    </div>
  );
}

export default FeaturedCard;
