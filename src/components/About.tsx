import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

function About() {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        // end: "+=800 center",
        scrub: 1,
        pin: true,
      },
    });

    clipAnimation.to("#about-image-wrapper", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen overflow-x-hidden">
      <div className="relative mt-36 mb-8 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-[10px]">
          Welcome to Zentry
        </p>

        <AnimatedTitle
          title="Disc<b>o</b>ver the world's <br /> largest shared <b>a</b>dventure"
          containerClass="mt-5 !text-black text-center"
        />
      </div>

      <div className="relative h-dvh w-screen" id="clip">
        <div
          id="about-image-wrapper"
          className="absolute top-0 left-1/2 z-25 h-[50vh] w-[15rem] -translate-x-1/2 overflow-hidden rounded-lg border-2 border-black md:h-[45vh] md:w-[20rem] lg:h-[60vh] lg:w-[30rem]"
        >
          <img
            src="img/about.webp"
            alt="Background"
            className="size-full object-cover"
          />
        </div>

        <div className="sm:text-md font-circular-web absolute bottom-[1rem] left-1/2 w-full max-w-[40rem] -translate-x-1/2 px-4 text-center text-xl md:top-[52vh] lg:top-[72vh]">
          <p>The Game of Games begins—your life, now an epic MMORPG</p>
          <p className="text-gray-500">
            Zentry unites every player from countless games and platforms, both
            digital and physical, into a unified Play Economy
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
