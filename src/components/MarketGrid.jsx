'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

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
    title: "Federal Interest Rate Hike in 2024",
    participants: ["Yes", "No"],
    chance: 55,
    volume: "$500m",
  },
  {
    title: "Bitcoin Price Above $100k by 2025?",
    participants: ["Yes", "No"],
    chance: 40,
    volume: "$800m",
  },
  {
    title: "AI Regulation Bill Passing in 2024",
    participants: ["Yes", "No"],
    chance: 35,
    volume: "$150m",
  },
  {
    title: "Will Elon Musk Step Down as CEO of X?",
    participants: ["Yes", "No"],
    chance: 50,
    volume: "$600m",
  },
  {
    title: "Unemployment Rate Below 3% by 2025",
    participants: ["Yes", "No"],
    chance: 30,
    volume: "$220m",
  },
  {
    title: "Recession Announcement in 2024",
    participants: ["Yes", "No"],
    chance: 70,
    volume: "$400m",
  },
  {
    title: "Apple Launching a Foldable iPhone by 2025?",
    participants: ["Yes", "No"],
    chance: 45,
    volume: "$300m",
  },
  {
    title: "Netflix Stock Above $600 by 2024?",
    participants: ["Yes", "No"],
    chance: 38,
    volume: "$210m",
  },
  {
    title: "First Human Mars Mission Before 2030?",
    participants: ["Yes", "No"],
    chance: 25,
    volume: "$100m",
  },
  {
    title: "US vs China Trade Deal by 2024?",
    participants: ["Yes", "No"],
    chance: 62,
    volume: "$900m",
  },
  {
    title: "Ethereum Merge Issues Resolved by 2025?",
    participants: ["Yes", "No"],
    chance: 48,
    volume: "$420m",
  },
  {
    title: "Oil Price Above $150 by 2025?",
    participants: ["Yes", "No"],
    chance: 30,
    volume: "$1.2b",
  },
  {
    title: "Disney Acquiring a Major Gaming Studio",
    participants: ["Yes", "No"],
    chance: 40,
    volume: "$750m",
  },
  {
    title: "Will Meta Release a Blockchain Product?",
    participants: ["Yes", "No"],
    chance: 55,
    volume: "$350m",
  },
  {
    title: "Tesla Cybertruck Deliveries Start in 2024?",
    participants: ["Yes", "No"],
    chance: 80,
    volume: "$500m",
  },
  {
    title: "New Pandemic Declared Before 2030?",
    participants: ["Yes", "No"],
    chance: 15,
    volume: "$50m",
  },
  {
    title: "Global Temperature Rise Above 2°C by 2050?",
    participants: ["Yes", "No"],
    chance: 75,
    volume: "$300m",
  },
  {
    title: "US Government Crypto Regulations in 2024?",
    participants: ["Yes", "No"],
    chance: 65,
    volume: "$250m",
  },
  {
    title: "NASA Finding Evidence of Alien Life?",
    participants: ["Yes", "No"],
    chance: 10,
    volume: "$100m",
  },
  {
    title: "UK Rejoining the EU by 2030?",
    participants: ["Yes", "No"],
    chance: 20,
    volume: "$600m",
  },
  {
    title: "Will SpaceX Conduct a Moon Landing in 2024?",
    participants: ["Yes", "No"],
    chance: 85,
    volume: "$1b",
  },
  {
    title: "Will Twitter (X) Introduce Subscription Plans?",
    participants: ["Yes", "No"],
    chance: 75,
    volume: "$180m",
  },
];

const moreMarkets = [
  {
    title: "Google Launches AI Chip by 2025?",
    participants: ["Yes", "No"],
    chance: 60,
    volume: "$500m",
  },
  {
    title: "Apple Acquiring Netflix by 2025?",
    participants: ["Yes", "No"],
    chance: 35,
    volume: "$1.1b",
  },
  {
    title: "US Banning TikTok Nationwide by 2024?",
    participants: ["Yes", "No"],
    chance: 55,
    volume: "$780m",
  },
  {
    title: "First Fully Autonomous Flight in 2024?",
    participants: ["Yes", "No"],
    chance: 28,
    volume: "$430m",
  },
  {
    title: "Will India Overtake China’s GDP by 2040?",
    participants: ["Yes", "No"],
    chance: 45,
    volume: "$1.5b",
  },
  {
    title: "Microsoft Announces Major Layoffs in 2025?",
    participants: ["Yes", "No"],
    chance: 50,
    volume: "$340m",
  },
  {
    title: "First Artificial General Intelligence (AGI) by 2030?",
    participants: ["Yes", "No"],
    chance: 20,
    volume: "$1.2b",
  },
  {
    title: "Amazon's Stock Reaches $3000 by 2025?",
    participants: ["Yes", "No"],
    chance: 52,
    volume: "$610m",
  },
  {
    title: "US Dollar Losing Reserve Currency Status?",
    participants: ["Yes", "No"],
    chance: 33,
    volume: "$850m",
  },
  {
    title: "World’s First Quantum Computer Breakthrough by 2026?",
    participants: ["Yes", "No"],
    chance: 40,
    volume: "$500m",
  },
  {
    title: "Facebook (Meta) Announces Major Rebranding Again?",
    participants: ["Yes", "No"],
    chance: 65,
    volume: "$330m",
  },
  {
    title: "China Invading Taiwan by 2025?",
    participants: ["Yes", "No"],
    chance: 30,
    volume: "$900m",
  },
  {
    title: "New York Banning Gas Vehicles by 2035?",
    participants: ["Yes", "No"],
    chance: 80,
    volume: "$700m",
  },
  {
    title: "Bitcoin Adopted as Legal Tender by Another Country?",
    participants: ["Yes", "No"],
    chance: 55,
    volume: "$430m",
  },
  {
    title: "Global Stock Market Crash in 2024?",
    participants: ["Yes", "No"],
    chance: 60,
    volume: "$1.3b",
  },
  {
    title: "AI Surpassing Human Creativity by 2030?",
    participants: ["Yes", "No"],
    chance: 25,
    volume: "$850m",
  },
  {
    title: "Saudi Arabia Normalizing Relations with Israel?",
    participants: ["Yes", "No"],
    chance: 70,
    volume: "$410m",
  },
  {
    title: "Climate Refugees Exceeding 100 Million by 2050?",
    participants: ["Yes", "No"],
    chance: 75,
    volume: "$500m",
  },
  {
    title: "US Deploys Troops to Defend Taiwan?",
    participants: ["Yes", "No"],
    chance: 40,
    volume: "$950m",
  },
  {
    title: "Elon Musk Launching AI Robot Company?",
    participants: ["Yes", "No"],
    chance: 65,
    volume: "$720m",
  },
  {
    title: "Global Internet Outage in 2025?",
    participants: ["Yes", "No"],
    chance: 12,
    volume: "$150m",
  },
  {
    title: "India Hosting the 2036 Olympics?",
    participants: ["Yes", "No"],
    chance: 55,
    volume: "$800m",
  },
  {
    title: "US Unveils UFO Evidence by 2026?",
    participants: ["Yes", "No"],
    chance: 20,
    volume: "$300m",
  },
  {
    title: "Tesla's Market Cap Exceeds $2 Trillion?",
    participants: ["Yes", "No"],
    chance: 45,
    volume: "$1b",
  },
  {
    title: "Amazon Drones Delivering Nationwide?",
    participants: ["Yes", "No"],
    chance: 60,
    volume: "$680m",
  },
  {
    title: "First Person Cloned by 2030?",
    participants: ["Yes", "No"],
    chance: 10,
    volume: "$220m",
  },
  {
    title: "US Presidential Election 2028 Winner?",
    participants: ["Republican", "Democrat"],
    chance: 50,
    volume: "$1.8b",
  },
  {
    title: "Mars Colony Established by 2040?",
    participants: ["Yes", "No"],
    chance: 30,
    volume: "$1.1b",
  },
  {
    title: "Global Population Exceeding 10 Billion by 2100?",
    participants: ["Yes", "No"],
    chance: 65,
    volume: "$750m",
  },
  {
    title: "Oil Price Drops Below $40 in 2025?",
    participants: ["Yes", "No"],
    chance: 28,
    volume: "$500m",
  },
  {
    title: "AI Outperforms Human Doctors by 2035?",
    participants: ["Yes", "No"],
    chance: 50,
    volume: "$1.5b",
  },
  {
    title: "New Pandemic from Zoonotic Virus in 2027?",
    participants: ["Yes", "No"],
    chance: 35,
    volume: "$250m",
  },
  {
    title: "Microsoft Overtakes Apple in Market Cap?",
    participants: ["Yes", "No"],
    chance: 42,
    volume: "$600m",
  },
  {
    title: "Space Tourism Becomes Affordable by 2030?",
    participants: ["Yes", "No"],
    chance: 22,
    volume: "$1b",
  },
  {
    title: "AI Passes the Turing Test by 2028?",
    participants: ["Yes", "No"],
    chance: 38,
    volume: "$400m",
  },
];

const allMarkets = [...markets, ...moreMarkets];


export default function MarketGrid() {
  const [visibleItems, setVisibleItems] = useState(24);

  const router = useRouter();

  const handleCardClick = (title) => {
    router.push(`/markets/${encodeURIComponent(title)}`);
  };

  const handleShowMore = () => {
    setVisibleItems(allMarkets.length);
  }


  return (
    <div className="p-6">
      {/* Grid of market cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {allMarkets.slice(0, visibleItems).map((market, index) => (
          <div
            key={index}
            className="p-4 bg-gray-800 rounded-md text-white shadow-lg cursor-pointer 
                       transition transform hover:scale-105 hover:bg-gray-700 hover:shadow-2xl"
            onClick={() => handleCardClick(market.title)}
          >
            <h3 className="text-lg font-bold">{market.title}</h3>
            <p className="mt-2">Chance: {market.chance}%</p>
            <p className="text-sm text-gray-400">Volume: {market.volume}</p>
            <div className="mt-4 flex justify-between">
              <button className="px-4 py-2 bg-green-500 rounded-md hover:bg-green-400">
                Buy
              </button>
              <button className="px-4 py-2 bg-red-500 rounded-md hover:bg-red-400">
                Sell
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Show More button */}
      {visibleItems < markets.length && (
        <div className="mt-6 flex justify-center">
          <button
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-400"
            onClick={handleShowMore}
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

