import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Loader from "./Loader";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const [currIndex, setCurrIntex] = useState<number>(1);
  const [bgIndex, setBgIndex] = useState<number>(1);
  const [hasClicked, setHasClicked] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [disableClick, setDisableClick] = useState<boolean>(false);
  const [loadedVideos, setLoadedVideos] = useState<number>(0);

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

  useGSAP(
    function () {
      if (hasClicked && nextVideoRef.current) {
        gsap.set("#next-video", { visibility: "visible" });
        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 0.75,
          ease: "power1.inOut",
          onStart: () => {
            nextVideoRef.current?.play();
          },
          onComplete: () => {
            setBgIndex(currIndex);
            setDisableClick(false);
          },
        });

        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 0.75,
          ease: "power1.inOut",
        });
      }
    },
    { dependencies: [currIndex], revertOnUpdate: true },
  );

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 40%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  return (
    <section className="relative h-dvh w-screen overflow-x-hidden">
      {isLoading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
          <Loader />
        </div>
      )}

      <div
        id="video-frame"
        className="bg-blue-75 relative z-10 h-dvh w-screen overflow-hidden rounded-lg"
      >
        <div>
          <div className="mask-clip-path absolute-center z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div
              onClick={handleMiniVideoClick}
              className="origin-center scale-50 opacity-0 transition-all duration-250 ease-in hover:scale-100 hover:opacity-100"
            >
              <video
                ref={nextVideoRef}
                src={getVideoSrc(upcomingVideo)}
                loop
                muted
                id="current-video"
                className="size-64 origin-center scale-150 object-cover object-center"
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
            className="absolute-center invisible z-20 size-64 rounded-lg object-cover object-center"
            onLoadedData={handleVideoLoad}
          />
          <video
            src={getVideoSrc(bgIndex)}
            loop
            muted
            autoPlay
            className="absolute top-0 left-0 size-full object-cover object-center"
            onLoadedData={handleVideoLoad}
          />
        </div>

        <h1 className="special-font hero-heading text-blue-75 absolute right-5 bottom-5 z-40">
          G<b>a</b>ming
        </h1>

        <div className="absolute top-0 left-0 z-40 size-full">
          <div className="mt-24 px-5 text-blue-100 sm:px-10">
            <h1 className="special-font hero-heading">
              redefi<b>n</b>e
            </h1>

            <p className="font-robert-regular mb-5 max-w-64">
              Enter the Metagame <br />
              Unleash the Play Economy
            </p>

            <Button
              id="watch-trailer"
              leftIcon={<TiLocationArrow />}
              containerClass="bg-yellow-300 flex-center gap-1"
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
