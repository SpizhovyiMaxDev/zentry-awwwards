export type FeatureCardData = {
  title?: string;
  description?: string;
  containerClass?: string;
  bgVideoSrc?: string;
  videoClass?: string;
  isComingSoon?: boolean;
  playVideo?: boolean;
};

export const FEATURE_CARDS: FeatureCardData[] = [
  {
    title: "Radiant",
    description:
      "A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure.",
    containerClass: "h-[30rem] lg:h-[65vh] col-span-2 row-span-1",
    bgVideoSrc: "/videos/feature-1.mp4",
    videoClass: "object-left",
  },
  {
    title: "Zigma",
    description:
      "An anime and gaming-inspired NFT collection - the IP primed for expansion.",
    containerClass:
      "row-span-1 aspect-[6/10] ml-[15vw] sm:ml-0 col-span-2 row-span-1 sm:col-span-1 sm:row-span-2",
    bgVideoSrc: "/videos/feature-2.mp4",
    videoClass: "object-top size-full",
  },
  {
    title: "Nexus",
    description:
      "A gamified social hub, adding a new dimension of play to social interaction for Web3 communities.",
    containerClass:
      "row-span-1 col-span-2 row-span-1 sm:col-span-1 sm:row-span-1 mr-[15vw] sm:mr-0 aspect-[3/3] sm:aspect-auto",
    bgVideoSrc: "/videos/feature-3.mp4",
    videoClass: "object-center size-full",
  },
  {
    title: "Azul",
    description:
      "Cross-world AI Agent - elevating your gameplay to be more fun and productive.",
    containerClass:
      "row-span-1 col-span-2 row-span-1 sm:col-span-1 sm:row-span-1 ml-[15vw] sm:ml-0 aspect-[3/3] sm:aspect-auto",
    bgVideoSrc: "/videos/feature-4.mp4",
    videoClass: "object-top size-full",
  },
  {
    title: "More Coming Soon!",
    containerClass:
      "row-span-1 col-span-2 row-span-1 sm:col-span-1 sm:row-span-1 sm:mr-0 mr-[35dvw]",
    videoClass: "object-center size-full",
    isComingSoon: true,
  },
  {
    bgVideoSrc: "/videos/feature-5.mp4",
    containerClass:
      "row-span-1 min-h-[15rem] col-span-2 row-span-1 sm:col-span-1 sm:row-span-1 ml-[25dvw] sm:ml-0",
    videoClass: "object-center size-full",
    playVideo: true,
  },
];
