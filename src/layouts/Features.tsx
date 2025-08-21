import FeaturedCard from "../ui/FeaturedCard";

function Features() {
  return (
    <section className="bg-black pb-52">
      <div className="mx-auto max-w-[95rem] px-4.5 md:px-[4.5rem]">
        <div className="mb-30 max-w-[33.5rem] py-32">
          <p className="font-circular-web text-lg text-blue-50">
            Inot Metagame Layer
          </p>
          <p className="font-circular-web text-lg text-blue-50 opacity-50">
            Immerse yourself in a rich and ever-expanding universe where a
            vibrant array of products converge into an interconnected overlay
            experience on your world.
          </p>
        </div>

        {/* <FeaturedCard
          title={}
          description={}
          backgroundImage={}
          isComingSoon={true}
        /> */}

        <div className="relative mb-7 h-96 w-full overflow-hidden rounded-md border border-white/20 md:h-[65]">
          <h2>Radiant</h2>
          <p>
            A cross-platform metagame app, turning your activities across Web2
            and Web3 games into a rewarding adventure.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;
