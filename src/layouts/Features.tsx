import FeaturedCard from "../ui/FeaturedCard";
import { FEATURE_CARDS } from "../data/features";
import { useFeatureCardsScrollAnimation } from "../hooks/useFeatureCardsScrollAnimation";

function Features() {
  useFeatureCardsScrollAnimation();

  return (
    <section id="features" className="overflow-hidden bg-black py-16 md:py-32">
      <div className="mx-auto max-w-[95rem] px-7.5 lg:px-14">
        <div className="mb-32 max-w-[33.5rem]">
          <p className="font-circular-web text-lg text-blue-50">
            Into the Metagame Layer
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
