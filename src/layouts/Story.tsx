import AnimatedSubheading from "../ui/AnimatedSubheading";
import AnimatedTitle from "../ui/AnimatedTitle";

function Story() {
  return (
    <section id="story" className="min-h-dvh w-screen bg-black text-blue-50">
      <div>
        <p className="font-general text-sm uppercase">
          The multiversal ip world
        </p>
        <AnimatedSubheading subHeading="Welcome to Zentry" />

        <div className="relative size-full">
          <AnimatedTitle
            title="The st<b>o</b>ry of <br />  a hidden real<b>m</b>"
            // sectionId="#story"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />
        </div>
      </div>
    </section>
  );
}

export default Story;
