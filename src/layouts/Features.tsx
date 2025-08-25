import { useGSAP } from "@gsap/react";
import FeaturedCard from "../ui/FeaturedCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { FEATURE_CARDS } from "../data/features";

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
          duration: 1.5,
          rotateX: 0,
          y: 0,
          transformPerspective: 5000,
          transformOrigin: "center top",
          opacity: 1,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "top 90%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });
  });

  return (
    <section className="overflow-hidden bg-black py-32">
      <div className="mx-auto max-w-[95rem] px-7.5 lg:px-14">
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

        <div className="grid grid-cols-2 gap-7.5">
          {FEATURE_CARDS.map((cardData, idx) => (
            <FeaturedCard key={idx} {...cardData} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
