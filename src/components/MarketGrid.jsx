// app/components/MarketGrid.js
'use client';
const markets = [
  {
    title: "Presidential Election Winner 2024",
    participants: ["Donald Trump", "Kamala Harris"],
    chance: 60,
    volume: "$2.1b",
  },
  {
    title: "Popular Vote Winner 2024",
    participants: ["Kamala Harris", "Donald Trump"],
    chance: 68,
    volume: "$417.5m",
  },
  {
    title: "Will Trump go on Joe Rogan?",
    chance: 64,
    volume: "$1.6m",
  },
  {
    title: "Presidential Election Winner 2024",
    participants: ["Donald Trump", "Kamala Harris"],
    chance: 60,
    volume: "$2.1b",
  },
  {
    title: "Popular Vote Winner 2024",
    participants: ["Kamala Harris", "Donald Trump"],
    chance: 68,
    volume: "$417.5m",
  },
  {
    title: "Will Trump go on Joe Rogan?",
    chance: 64,
    volume: "$1.6m",
  },
  {
    title: "Presidential Election Winner 2024",
    participants: ["Donald Trump", "Kamala Harris"],
    chance: 60,
    volume: "$2.1b",
  },
  {
    title: "Popular Vote Winner 2024",
    participants: ["Kamala Harris", "Donald Trump"],
    chance: 68,
    volume: "$417.5m",
  },
  {
    title: "Will Trump go on Joe Rogan?",
    chance: 64,
    volume: "$1.6m",
  },
  {
    title: "Presidential Election Winner 2024",
    participants: ["Donald Trump", "Kamala Harris"],
    chance: 60,
    volume: "$2.1b",
  },
  {
    title: "Popular Vote Winner 2024",
    participants: ["Kamala Harris", "Donald Trump"],
    chance: 68,
    volume: "$417.5m",
  },
  {
    title: "Will Trump go on Joe Rogan?",
    chance: 64,
    volume: "$1.6m",
  },
  {
    title: "Presidential Election Winner 2024",
    participants: ["Donald Trump", "Kamala Harris"],
    chance: 60,
    volume: "$2.1b",
  },
  {
    title: "Popular Vote Winner 2024",
    participants: ["Kamala Harris", "Donald Trump"],
    chance: 68,
    volume: "$417.5m",
  },
  {
    title: "Will Trump go on Joe Rogan?",
    chance: 64,
    volume: "$1.6m",
  },
  {
    title: "Presidential Election Winner 2024",
    participants: ["Donald Trump", "Kamala Harris"],
    chance: 60,
    volume: "$2.1b",
  },
  {
    title: "Popular Vote Winner 2024",
    participants: ["Kamala Harris", "Donald Trump"],
    chance: 68,
    volume: "$417.5m",
  },
  {
    title: "Will Trump go on Joe Rogan?",
    chance: 64,
    volume: "$1.6m",
  },
  {
    title: "Presidential Election Winner 2024",
    participants: ["Donald Trump", "Kamala Harris"],
    chance: 60,
    volume: "$2.1b",
  },
  {
    title: "Popular Vote Winner 2024",
    participants: ["Kamala Harris", "Donald Trump"],
    chance: 68,
    volume: "$417.5m",
  },
  {
    title: "Will Trump go on Joe Rogan?",
    chance: 64,
    volume: "$1.6m",
  },
  {
    title: "Presidential Election Winner 2024",
    participants: ["Donald Trump", "Kamala Harris"],
    chance: 60,
    volume: "$2.1b",
  },
  {
    title: "Popular Vote Winner 2024",
    participants: ["Kamala Harris", "Donald Trump"],
    chance: 68,
    volume: "$417.5m",
  },
  {
    title: "Will Trump go on Joe Rogan?",
    chance: 64,
    volume: "$1.6m",
  },
];

import { useRouter } from 'next/navigation';

export default function MarketGrid() {
  const router = useRouter();

  const handleCardClick = (title) => {
    router.push(`/markets/${encodeURIComponent(title)}`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {markets.map((market, index) => (
        <div
          key={index}
          className="p-4 bg-gray-800 rounded-md text-white shadow-lg cursor-pointer"
          onClick={() => handleCardClick(market.title)}
        >
          <h3 className="text-lg font-bold">{market.title}</h3>
          <p className="mt-2">Chance: {market.chance}%</p>
          <p className="text-sm text-gray-400">Volume: {market.volume}</p>
          <div className="mt-4 flex justify-between">
            <button className="px-4 py-2 bg-green-500 rounded-md">Buy</button>
            <button className="px-4 py-2 bg-red-500 rounded-md">Sell</button>
          </div>
        </div>
      ))}
    </div>
  );
}
