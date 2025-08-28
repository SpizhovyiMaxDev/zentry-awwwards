import { useEffect, useRef, useState } from "react";

import { useHeroVideoClickAnimation } from "../hooks/useHeroVideClickAnimation";
import { useHeroScrollClipAnimation } from "../hooks/useHeroScrollClipAnimation";

import { TiLocationArrow } from "react-icons/ti";
import Button from "../ui/Button";
import Loader from "./Loader";
import { useParallaxEffect } from "../hooks/useParallaxEffect";

function Hero() {
  const [currIndex, setCurrIntex] = useState(1);
  const [bgIndex, setBgIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [disableClick, setDisableClick] = useState(false);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const nextVideoRef = useRef<HTMLVideoElement | null>(null);

  const totalVideos: number = 4;
  const upcomingVideo = (currIndex % totalVideos) + 1;

  const getVideoSrc = (idx: number): string => `videos/hero-${idx}.mp4`;

  function handleMiniVideoClick(): void {
    if (disableClick) return;

    setHasClicked(true);
    setCurrIntex(upcomingVideo);
    setDisableClick(true);
  }

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  useEffect(
    function () {
      if (loadedVideos === totalVideos - 1) {
        setIsLoading(false);
      }
    },
    [loadedVideos],
  );

  const { containerRef, targetRef, handleMouseMove, handleMouseLeave } =
    useParallaxEffect<HTMLImageElement>({
      tiltX: -88,
      tiltY: 88,
      perspective: 1200,
      resetOnLeave: true,
      isTranslating: true,
    });

  useHeroScrollClipAnimation();
  useHeroVideoClickAnimation(
    hasClicked,
    nextVideoRef,
    currIndex,
    setBgIndex,
    setDisableClick,
  );

  return (
    <section
      className="relative h-dvh w-full overflow-x-hidden"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {isLoading && (
        <div className="absolute z-[100] flex h-dvh w-full items-center justify-center overflow-hidden bg-violet-50">
          <Loader />
        </div>
      )}

      <div
        id="video-frame"
        className="bg-blue-75 relative z-10 h-dvh w-full overflow-hidden"
      >
        <div>
          <div
            ref={targetRef}
            className="absolute top-[60%] left-1/2 z-40 size-25 -translate-x-1/2 cursor-pointer overflow-hidden rounded-lg border-none sm:top-1/2 sm:size-44 sm:-translate-y-1/2 lg:size-64"
          >
            <div
              onClick={handleMiniVideoClick}
              className="transition-all duration-250 ease-in"
            >
              <video
                src={getVideoSrc(upcomingVideo)}
                loop
                muted
                id="current-video"
                className="size-25 origin-center scale-150 object-cover object-center sm:size-44 lg:size-64"
                onLoadedData={handleVideoLoad}
              />
            </div>
          </div>

          <video
            ref={nextVideoRef}
            src={getVideoSrc(currIndex)}
            loop
            muted
            id="next-video"
            className="invisible absolute top-1/2 left-1/2 z-20 size-64 -translate-x-1/2 -translate-y-1/2 rounded-lg object-cover object-center"
            onLoadedData={handleVideoLoad}
          />
        </div>

        <video
          src={getVideoSrc(bgIndex)}
          loop
          muted
          autoPlay
          className="absolute top-0 left-0 size-full object-cover object-center"
          onLoadedData={handleVideoLoad}
        />

        <h1 className="special-font hero-heading text-blue-75 absolute right-5 bottom-5 z-40">
          G<b>a</b>ming
        </h1>

        <div className="absolute top-0 left-0 z-30 size-full">
          <div className="mt-24 px-5 text-blue-100 sm:px-10">
            <h1 className="special-font hero-heading">
              redefi<b>n</b>e
            </h1>

            <p className="font-robert-regular mb-5 max-w-64">
              Enter the Metagame <br />
              Unleash the Play Economy
            </p>

            <Button
              leftIcon={<TiLocationArrow />}
              containerClass="text-black bg-yellow-300 flex items-center justify-center gap-1"
            >
              Watch Trailer
            </Button>
          </div>
        </div>
      </div>

      <h1 className="special-font hero-heading absolute right-5 bottom-5 text-black">
        G<b>a</b>ming
      </h1>
    </section>
  );
}

export default Hero;
