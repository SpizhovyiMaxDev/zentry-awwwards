import FeaturedCard from "../ui/FeaturedCard";

function Features() {
  return (
    <section className="bg-black py-32">
      <div className="mx-auto max-w-[95rem] px-4.5">
        <div className="mb-32 max-w-[33.5rem]">
          <p className="font-circular-web text-lg text-blue-50">
            Inot Metagame Layer
          </p>
          <p className="font-circular-web text-lg text-blue-50 opacity-50">
            Immerse yourself in a rich and ever-expanding universe where a
            vibrant array of products converge into an interconnected overlay
            experience on your world.
          </p>
        </div>

        <FeaturedCard
          title="Radiant"
          description="A cross-platform metagame app, turning your activities across Web2
            and Web3 games into a rewarding adventure."
          bgVideoSrc="/videos/feature-1.mp4"
          videoClassName="object-left"
          isComingSoon={true}
        />

        <div></div>
      </div>
    </section>
  );
}

export default Features;
