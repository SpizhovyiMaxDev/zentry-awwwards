import AnimatedTitle from "../ui/AnimatedTitle";
import AnimatedSubheading from "../ui/AnimatedSubheading";
import { useAboutScrollAnimation } from "../hooks/useAboutScrollAnimation";

function About() {
  useAboutScrollAnimation();

  return (
    <section id="about" className="min-h-dvh w-full overflow-hidden">
      <div className="relative mt-36 mb-8 flex flex-col items-center gap-10">
        <AnimatedSubheading subHeading="Welcome to Zentry" />

        <AnimatedTitle
          title="Disc<b>o</b>ver the world's <br /> largest shared <b>a</b>dventure"
          className="text-4xl text-black sm:text-7xl"
        />
      </div>

      <div className="relative flex h-dvh w-full flex-col" id="clip">
        <div
          id="about-image-wrapper"
          className="absolute top-0 left-1/2 z-25 h-[50vh] w-[85vw] -translate-x-1/2 overflow-hidden rounded-lg border-2 border-black sm:w-[30rem] lg:h-[55vh]"
        >
          <img
            src="img/about.webp"
            alt="Background"
            className="size-full object-cover"
          />
        </div>

        <div className="text-md font-circular-web text-md absolute left-1/2 mt-[55vh] w-full max-w-[45rem] -translate-x-1/2 px-10 text-center lg:mt-[62vh] lg:text-xl">
          <p>The Game of Games begins—your life, now an epic MMORPG</p>
          <p className="text-gray-500">
            Zentry unites every player from countless games and platforms, both
            digital and physical, into a unified Play Economy
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
