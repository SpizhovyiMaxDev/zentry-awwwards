export interface Update {
  id: number;
  image: string;
  alt: string;
  date: string;
  title: string;
  link: string;
}

export const UPDATES_CARDS: Update[] = [
  {
    id: 1,
    image: "img/updates-1.webp",
    alt: "updates-01",
    date: "09.05.2024",
    title:
      "Nexus: Zentry's Metagame Portal Bridging Human & AI in the Global Play Economy",
    link: "https://medium.com/zentry/nexus-zentrys-player-portal-bridging-human-ai-in-the-unified-play-economy-719c363d5a8a",
  },
  {
    id: 2,
    image: "img/updates-2.webp",
    alt: "updates-02",
    date: "22.11.2024",
    title: "Zentry Whitepaper: The Blueprint to the Metagame",
    link: "https://medium.com/zentry/zentry-whitepaper-the-blueprint-to-the-game-of-games-72c2cb2bf16d",
  },
];
