import { useGSAP } from "@gsap/react";
import FeaturedCard from "../ui/FeaturedCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function Features() {
  useGSAP(() => {
    gsap.utils.toArray<HTMLDivElement>(".feature-card").forEach((card) => {
      gsap.fromTo(
        card,
        {
          y: 30,
          rotateX: -10,
          opacity: 0,
        },
        {
          rotateX: 0,
          y: 0,
          duration: 1,
          transformPerspective: 1000,
          transformOrigin: "center top",
          opacity: 1,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "top bottom",
            toggleActions: "play none none reverse",
          },
        },
      );
    });
  });

  return (
    <section className="overflow-hidden bg-black py-32">
      <div className="mx-auto max-w-[95rem] px-4.5 lg:px-7">
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

        <div className="grid grid-cols-2 gap-7">
          <FeaturedCard
            title="Radiant"
            description="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
            containerClass="min-h-[30rem] col-span-2 row-span-1"
            bgVideoSrc="/videos/feature-1.mp4"
            videoClass="object-left"
          />

          <FeaturedCard
            title="Zigma"
            description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
            containerClass="row-span-1 aspect-[6/10] ml-[15vw] sm:ml-0  col-span-2 row-span-1 sm:col-span-1 sm:row-span-2"
            bgVideoSrc="/videos/feature-2.mp4"
            videoClass="object-top size-full"
          />

          <FeaturedCard
            title="Nexus"
            description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
            containerClass="mr-[20dvw] sm:mr-0 row-span-1 col-span-2 row-span-1 sm:col-span-1 sm:row-span-1 aspect-[3/3] sm:aspect-auto"
            bgVideoSrc="/videos/feature-3.mp4"
            videoClass="object-center size-full"
          />

          <FeaturedCard
            title="Azul"
            description="Cross-world AI Agent - elevating your gameplay to be more fun and productive."
            containerClass="row-span-1 col-span-2 row-span-1 sm:col-span-1 sm:row-span-1 ml-[15vw] aspect-[3/3] sm:ml-0 sm:aspect-auto"
            bgVideoSrc="/videos/feature-4.mp4"
            videoClass="object-top size-full"
          />

          <FeaturedCard
            title="More Coming Soon!"
            containerClass="row-span-1 col-span-2 row-span-1 sm:col-span-1 sm:row-span-1 sm:mr-0  mr-[35dvw]"
            videoClass="object-center size-full"
            isComingSoon={true}
          />

          <FeaturedCard
            bgVideoSrc="/videos/feature-5.mp4"
            containerClass="row-span-1  min-h-[15rem] col-span-2 row-span-1 sm:col-span-1 sm:row-span-1 ml-[25dvw] sm:ml-0"
            videoClass="object-center size-full"
            playVideo={true}
          />
        </div>
      </div>
    </section>
  );
}

export default Features;
