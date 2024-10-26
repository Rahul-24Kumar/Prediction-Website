// components/Hero.js
export default function Hero() {
    const cards = [
      { title: "2024 Election Forecast", color: "bg-blue-500" },
      { title: "2024 Presidential Election", color: "bg-red-400" },
      { title: "U.S. Recession in 2024?", color: "bg-orange-400" },
      { title: "Trade Elections", color: "bg-green-400" },
    ];
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`p-6 rounded-md text-white ${card.color} shadow-lg`}
          >
            <h2 className="text-xl font-bold">{card.title}</h2>
            <button className="mt-4 px-4 py-2 bg-black bg-opacity-30 rounded">
              View
            </button>
          </div>
        ))}
      </div>
    );
  }
  