import AnimatedSubheading from "../ui/AnimatedSubheading";
import AnimatedTitle from "../ui/AnimatedTitle";

function Story() {
  return (
    <section id="story" className="w-screen bg-black text-blue-50">
      <div className="relative flex flex-col items-center gap-10">
        <AnimatedSubheading subHeading="The multiversal ip world" />

        <div className="relative size-full">
          <AnimatedTitle
            title="The st<b>o</b>ry of <br />  a hidden real<b>m</b>"
            containerClass=" pointer-events-none mix-blend-difference relative z-10"
          />

          <div className="relative w-full">
            <div
              className="mx-auto mt-[-10%] w-full max-w-[120rem]"
              style={{
                clipPath: "polygon(23% 10%, 75% 20%, 85% 58%, 20% 90%)",
              }}
            >
              <img
                src="/img/entrance.webp"
                alt="story-img"
                className="inline-block size-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Story;
