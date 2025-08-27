import AnimatedTitle from "../ui/AnimatedTitle";
import Button from "../ui/Button";

function Updates() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto flex h-full max-w-[90rem] flex-col gap-20 px-8 md:flex-row">
        <div className="md:flex-1">
          <div className="sticky top-14 max-w-96 bg-white">
            <AnimatedTitle
              title="Latest <br /> Updates"
              containerClass="mb-8"
              className="justify-start !gap-0 text-7xl lg:text-9xl"
            />

            <p className="font-circular-web text-md mb-5 text-black lg:text-xl">
              Stay updated with the latest news, events, and updates in our
              ecosystem. Be part of our universe's growth and evolution.
            </p>
            <Button containerClass="bg-black text-white">Read All News</Button>
          </div>
        </div>

        <div className="flex flex-col gap-10 md:flex-1">
          <div>
            <div className="mb-8 overflow-hidden rounded-2xl border-2">
              <img src="img/updates-1.webp" alt="updates-01" />
            </div>

            <div className="flex flex-row items-start gap-16">
              <p className="text-xs font-semibold">09.05.2024</p>
              <a
                href="#"
                className="font-circular-web text-md mb-5 max-w-100 text-black lg:text-2xl"
              >
                Nexus: Zentry’s Metagame Portal Bridging Human & AI in the
                Global Play Economy
              </a>
            </div>
          </div>

          <div>
            <div className="mb-8 overflow-hidden rounded-2xl border-2">
              <img src="img/updates-2.webp" alt="updates-01" />
            </div>

            <div className="flex flex-row gap-16">
              <p className="text-xs font-semibold">09.05.2024</p>
              <a
                href="#"
                className="font-circular-web text-md mb-5 max-w-100 text-black lg:text-2xl"
              >
                Zentry Whitepaper: The Blueprint to the Metagame
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Updates;
