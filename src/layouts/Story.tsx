import { useParallaxEffect } from "../hooks/useParallaxEffect";
import { usePolygonAnimation } from "../hooks/usePolygonAnimation";
import AnimatedSubheading from "../ui/AnimatedSubheading";
import AnimatedTitle from "../ui/AnimatedTitle";
import Button from "../ui/Button";

function Story() {
  const { containerRef, targetRef, handleMouseMove, handleMouseLeave } =
    useParallaxEffect<HTMLImageElement>({
      tiltX: 8,
      tiltY: -8,
      perspective: 1200,
      resetOnLeave: true,
    });

  usePolygonAnimation({
    triggerSelector: ".rotating-polygon-cover",
    targetSelector: ".rotating-polygon",
  });

  return (
    <section
      id="story"
      className="w-screen overflow-hidden bg-black text-blue-50 transition-transform duration-100"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative flex flex-col items-center gap-10">
        <AnimatedSubheading subHeading="The multiversal ip world" />

        <div className="relative size-full">
          <AnimatedTitle
            title="The st<b>o</b>ry of <br />  a hidden real<b>m</b>"
            containerClass="pointer-events-none mix-blend-difference z-10"
            className="text-4xl sm:text-7xl xl:text-9xl"
          />

          <div className="rotating-polygon-cover w-full">
            <div
              className="rotating-polygon mx-auto mt-[-12%] w-full max-w-[120rem]"
              style={{
                clipPath: "polygon(23% 10%, 75% 20%, 85% 58%, 20% 90%)",
              }}
            >
              <img
                ref={targetRef}
                src="/img/entrance.webp"
                alt="story-img"
                className="pointer-events-none inline-block size-full"
              />
            </div>
          </div>
        </div>

        <div className="mt-[-10%] flex w-full max-w-[80rem] justify-center px-8 pb-16 sm:mt-[-15%] sm:justify-end sm:pb-32">
          <div className="max-w-90 text-center sm:text-left">
            <p className="font-circular-web text-md mb-5 text-blue-50">
              Where realms converge, lies Zentry and the boundless pillar.
              Discover its secrets and shape your fate amidst infinite
              opportunities.
            </p>

            <Button containerClass="text-sm bg-violet-50 text-black">
              Discover Prologue
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Story;
