import { useRef } from "react";
import type { MouseEvent } from "react";
import AnimatedSubheading from "../ui/AnimatedSubheading";
import AnimatedTitle from "../ui/AnimatedTitle";

function Story() {
  const imgContainerRef = useRef<HTMLImageElement | null>(null);
  const mapRef = useRef<HTMLDivElement | null>(null);

  function handleMapMouseMove(e: MouseEvent<HTMLDivElement>) {
    const map = mapRef.current;
    const imgContainer = imgContainerRef.current;
    if (!map || !imgContainer) return;

    const { top, left, width, height } = map.getBoundingClientRect();

    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 44;
    const tiltY = (relativeX - 0.5) * -44;

    const newTransform = `perspective(1200px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    imgContainer.style.transform = newTransform;
  }

  function handleMapMouseLeave() {
    const imgContainer = imgContainerRef.current;
    if (!imgContainer) return;
    const newTransform = `perspective(1200px) rotateX(0deg) rotateY(0deg)`;
    imgContainer.style.transform = newTransform;
  }

  return (
    <section
      id="story"
      className="w-screen overflow-hidden bg-black text-blue-50 transition-transform duration-100"
      ref={mapRef}
      onMouseMove={handleMapMouseMove}
      onMouseLeave={handleMapMouseLeave}
    >
      <div className="relative flex flex-col items-center gap-10">
        <AnimatedSubheading subHeading="The multiversal ip world" />

        <div className="relative size-full">
          <AnimatedTitle
            title="The st<b>o</b>ry of <br />  a hidden real<b>m</b>"
            containerClass=" pointer-events-none mix-blend-difference relative z-10"
          />

          <div className="w-full">
            <div
              ref={imgContainerRef}
              className="mx-auto mt-[-10%] w-full max-w-[120rem]"
              style={{
                clipPath: "polygon(23% 10%, 75% 20%, 85% 58%, 20% 90%)",
              }}
            >
              <img
                src="/img/entrance.webp"
                alt="story-img"
                className="pointer-events-none inline-block size-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Story;
