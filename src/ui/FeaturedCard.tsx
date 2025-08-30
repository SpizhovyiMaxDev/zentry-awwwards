import clsx from "clsx";
import { useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { useParallaxEffect } from "../hooks/useParallaxEffect";
import Button from "./Button";

interface FeaturedCardProps {
  title?: string;
  description?: string;
  bgVideoSrc?: string;
  videoClass?: string;
  containerClass?: string;
  isMoreComingSoon?: boolean;
  playVideo?: boolean;
  isTrial?: boolean;
  isComingSoon?: boolean;
}

function FeaturedCard({
  title,
  description,
  bgVideoSrc,
  isMoreComingSoon,
  videoClass,
  containerClass,
  playVideo,
  isTrial,
  isComingSoon,
}: FeaturedCardProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const { containerRef, targetRef, handleMouseMove, handleMouseLeave } =
    useParallaxEffect<HTMLDivElement>({
      tiltX: 10,
      tiltY: -10,
      perspective: 1200,
      resetOnLeave: true,
      isTranslating: true,
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
            isMoreComingSoon ? "bg-violet-300" : "bg-black"
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
            className={`relative z-10 p-5 ${isMoreComingSoon ? "text-black" : "text-blue-50"}`}
          >
            {title && (
              <h1
                className={`font-zentry max-w-10 text-4xl font-bold tracking-wide ${isMoreComingSoon ? "md:text-7xl" : "md:text-6xl"}`}
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
          {isMoreComingSoon && (
            <div className="p-2.5 text-right">
              <button className="background-black rounded-xl uppercase">
                <TiLocationArrow className="h-15 w-15" />
              </button>
            </div>
          )}

          {(isTrial || isComingSoon) && (
            <div className="flex gap-2.5 p-2.5">
              {isComingSoon && (
                <Button
                  buttonClass="text-gray-400"
                  backgroundClass="bg-white"
                  leftIcon={<TiLocationArrow />}
                >
                  Coming Soon
                </Button>
              )}

              {isTrial && (
                <Button buttonClass="" backgroundClass="bg-white">
                  Try Beta
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FeaturedCard;
