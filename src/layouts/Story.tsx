import AnimatedSubheading from "../ui/AnimatedSubheading";
import AnimatedTitle from "../ui/AnimatedTitle";

function Story() {
  return (
    <section id="story" className="min-h-dvh w-screen bg-black text-blue-50">
      <div className="relative flex flex-col items-center gap-10">
        <AnimatedSubheading subHeading="The multiversal ip world" />

        <div className="relative size-full">
          <AnimatedTitle
            title="The st<b>o</b>ry of <br />  a hidden real<b>m</b>"
            containerClass=" pointer-events-none mix-blend-difference relative z-10"
          />

          <div className="story-img-container">
            <div className="story-img-wrapper">
              <div className="story-img-content">
                <img
                  src="/img/entrance.webp"
                  alt="story-img"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Story;
