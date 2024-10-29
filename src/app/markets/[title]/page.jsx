'use client';
import { useState } from 'react'; // Import useState for state management
import { notFound } from 'next/navigation';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale);

export default function MarketDetail({ params }) {
  const { title } = params;

  if (!title) {
    notFound(); // Handle case where title is missing
  }

  // Participants Data
  const participants = {
    'Donald Trump': {
      name: 'Donald Trump',
      percentage: 66.3,
      yesPrice: 66.3,
      noPrice: 33.8,
    },
    'Kamala Harris': {
      name: 'Kamala Harris',
      percentage: 33.7,
      yesPrice: 33.7,
      noPrice: 66.4,
    },
  };

  const [selectedParticipant, setSelectedParticipant] = useState('Donald Trump');
  const [isBuy, setIsBuy] = useState(true); // Track Buy/Sell state
  const [shares, setShares] = useState(0); // Track the number of shares

  const handleSharesChange = (increment) => {
    setShares((prev) => Math.max(0, prev + increment)); // Prevent negative shares
  };

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 0) setShares(value);
  };

  // Chart Data
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    datasets: [
      {
        label: 'Donald Trump',
        data: [50, 55, 52, 60, 58, 65, 64, 66, 68, 64],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        tension: 0.4,
        fill: false,
        pointRadius: 4,
      },
      {
        label: 'Kamala Harris',
        data: [30, 35, 40, 38, 42, 37, 36, 34, 32, 35],
        borderColor: 'rgb(54, 162, 235)',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        tension: 0.4,
        fill: false,
        pointRadius: 4,
      },
    ],
  };

  // Chart Options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: { color: 'white' },
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.raw}%`,
        },
      },
    },
    scales: {
      x: {
        ticks: { color: 'white' },
        grid: { color: 'rgba(255, 255, 255, 0.2)' },
      },
      y: {
        ticks: { color: 'white', callback: (value) => `${value}%` },
        grid: { color: 'rgba(255, 255, 255, 0.2)' },
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-8">
        {/* Left Side: Chart */}
        <div className="col-span-2">
          <h1 className="text-4xl font-extrabold mb-4 text-center">
            {decodeURIComponent(title)}
          </h1>
          <p className="text-center text-gray-400 font-bold mb-6">
            Explore market insights and predictions about the 2024 Presidential Election.
          </p>

          {/* Chart Section */}
          <div className="bg-gray-700 rounded-md p-6 mb-8">
            <Line data={data} options={options} />
          </div>

          {/* Participants List */}
          <div className="space-y-4">
            {Object.keys(participants).map((participant) => (
              <div
                key={participant}
                className={`flex justify-between items-center bg-gray-700 p-4 rounded-md cursor-pointer ${selectedParticipant === participant ? 'bg-yellow-200 text-gray-900' : ''
                  }`}
                onClick={() => setSelectedParticipant(participant)}
              >

                <p className="font-semibold flex items-center space-x-3">
                  <img
                    src="https://via.placeholder.com/50"
                    alt="profile"
                    className="rounded-full w-12 h-12"
                  />
                  <span>{participants[participant].name}</span>
                </p>
                <span className="text-lg font-bold">
                  {participants[participant].percentage}%
                </span>

              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Sidebar Card */}
        <div className="bg-gray-800 rounded-xl p-6">
          <div className="flex items-center mb-4">
            <img
              src="https://via.placeholder.com/50"
              alt="profile"
              className="rounded-full w-12 h-12 mr-3"
            />
            <h2 className="text-xl font-bold">{selectedParticipant}</h2>
          </div>

          {/* Buy/Sell Toggle */}
          <div className="flex justify-around mb-4">
            <button
              className={`w-full py-2 ${isBuy ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-400'}`}
              onClick={() => setIsBuy(true)}
            >
              Buy
            </button>
            <button
              className={`w-full py-2 ${!isBuy ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-400'}`}
              onClick={() => setIsBuy(false)}
            >
              Sell
            </button>
          </div>

          {/* Outcome Section */}
          <div className="flex justify-around mb-6">
            <button
              className={`flex-1 py-3 mr-2 rounded-md ${isBuy ? 'bg-green-600 text-white' : 'bg-gray-600 text-gray-400'
                }`}
            >
              Yes {participants[selectedParticipant].yesPrice}¢
            </button>
            <button
              className={`flex-1 py-3 ml-2 rounded-md ${!isBuy ? 'bg-red-600 text-white' : 'bg-gray-600 text-gray-400'
                }`}
            >
              No {participants[selectedParticipant].noPrice}¢
            </button>
          </div>

          {/* Shares Input Section */}
          <div className="mb-6">
            <label className="block mb-2 text-sm">Shares</label>
            <div className="flex items-center">
              <button
                className="bg-gray-700 p-2 rounded-l-md"
                onClick={() => handleSharesChange(-1)}
              >
                -
              </button>
              <input
                type="number"
                value={shares}
                onChange={handleInputChange}
                className="w-full text-center p-2 bg-gray-900 border-0 outline-none text-white"
              />
              <button
                className="bg-gray-700 p-2 rounded-r-md"
                onClick={() => handleSharesChange(1)}
              >
                +
              </button>
            </div>
          </div>

          {/* Login Button */}
          <button className="w-full bg-blue-500 py-3 rounded-md text-white font-bold mb-4">
            Log In
          </button>

          {/* Price Summary */}
          <div className="text-sm">
            <p className="flex justify-between">
              <span>Avg price</span> <span>0.0¢</span>
            </p>
            <p className="flex justify-between">
              <span>Est. amount received</span> <span>$0.00</span>
            </p>
            <p className="text-center text-gray-400 mt-4 text-xs">
              By trading, you agree to the <a href="#" className="underline">Terms of Use</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
