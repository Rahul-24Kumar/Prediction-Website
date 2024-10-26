'use client';
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

// Register required chart.js components
ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale);

export default function MarketDetail({ params }) {
  const { title } = params;

  if (!title) {
    notFound(); // Handle case where title is missing
  }

  // Chart Data
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'], // X-axis labels
    datasets: [
      {
        label: 'Donald Trump',
        data: [50, 55, 52, 60, 58, 65, 64, 66, 68, 64], // Y-axis data for Trump
        borderColor: 'rgb(255, 99, 132)', // Line color
        backgroundColor: 'rgba(255, 99, 132, 0.5)', // Hover background color
        tension: 0.4, // Curve smoothness
        fill: false,
        pointRadius: 4,
      },
      {
        label: 'Kamala Harris',
        data: [30, 35, 40, 38, 42, 37, 36, 34, 32, 35], // Y-axis data for Harris
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
        labels: {
          color: 'white', // Legend text color
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.raw}%`, // Display percentage on hover
        },
      },
    },
    scales: {
      x: {
        ticks: { color: 'white' }, // X-axis tick color
        grid: { color: 'rgba(255, 255, 255, 0.2)' },
      },
      y: {
        ticks: { color: 'white', callback: (value) => `${value}%` }, // Y-axis tick color
        grid: { color: 'rgba(255, 255, 255, 0.2)' },
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-5xl mx-auto bg-gray-800 rounded-lg shadow-xl p-6">
        <h1 className="text-4xl font-extrabold mb-4 text-center">{decodeURIComponent(title)}</h1>
        <p className="text-center text-gray-400 mb-6">
          Explore market insights and predictions about <strong>{title}</strong>.
        </p>

        {/* Market Statistics Section */}
        <div className="flex justify-between items-center mb-8">
          <div className="text-sm text-gray-400">
            <p>Volume: <strong>$2.1B</strong></p>
            <p>Event Date: <strong>Nov 4, 2024</strong></p>
          </div>
          <div className="flex space-x-4">
            <button className="bg-green-600 px-6 py-2 rounded-lg text-white">Buy Yes 64.5¢</button>
            <button className="bg-red-600 px-6 py-2 rounded-lg text-white">Buy No 35.5¢</button>
          </div>
        </div>

        {/* Chart Section */}
        <div className="bg-gray-700 rounded-md p-4 mb-8">
          <Line data={data} options={options} />
        </div>

        {/* Participants Section */}
        <div className="space-y-6">
          <div className="flex justify-between items-center bg-gray-700 p-4 rounded-md">
            <p className="font-semibold">Donald Trump</p>
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold">64.5%</span>
              <button className="bg-green-500 px-4 py-1 rounded-md">Buy</button>
              <button className="bg-red-500 px-4 py-1 rounded-md">Sell</button>
            </div>
          </div>

          <div className="flex justify-between items-center bg-gray-700 p-4 rounded-md">
            <p className="font-semibold">Kamala Harris</p>
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold">35.5%</span>
              <button className="bg-green-500 px-4 py-1 rounded-md">Buy</button>
              <button className="bg-red-500 px-4 py-1 rounded-md">Sell</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



// 'use client';
// import { notFound } from 'next/navigation';

// export default function MarketDetail({ params }) {
//     const { title } = params;

//     if (!title) {
//         notFound(); // Handle case where title is missing
//     }

//     return (
//         <div className="min-h-screen bg-gray-900 text-white p-8">
//             <div className="max-w-5xl mx-auto bg-gray-800 rounded-lg shadow-xl p-6">
//                 <h1 className="text-4xl font-extrabold mb-4 text-center">{decodeURIComponent(title)}</h1>
//                 <p className="text-center text-gray-400 mb-6">
//                     Explore market insights and predictions about <strong>{title}</strong>.
//                 </p>

//                 {/* Market Statistics Section */}
//                 <div className="flex justify-between items-center mb-8">
//                     <div className="text-sm text-gray-400">
//                         <p>Volume: <strong>$2.1B</strong></p>
//                         <p>Event Date: <strong>Nov 4, 2024</strong></p>
//                     </div>
//                     <div className="flex space-x-4">
//                         <button className="bg-green-600 px-6 py-2 rounded-lg text-white">Buy Yes 64.5¢</button>
//                         <button className="bg-red-600 px-6 py-2 rounded-lg text-white">Buy No 35.5¢</button>
//                     </div>
//                 </div>

//                 {/* Graph Placeholder */}
//                 <div className="bg-gray-700 rounded-md h-64 mb-8 flex items-center justify-center">
//                     <p className="text-gray-500">Graph will appear here</p>
//                 </div>

//                 {/* Participants Section */}
//                 <div className="space-y-6">
//                     <div className="flex justify-between items-center bg-gray-700 p-4 rounded-md">
//                         <p className="font-semibold">Donald Trump</p>
//                         <div className="flex items-center space-x-2">
//                             <span className="text-lg font-bold">64.5%</span>
//                             <button className="bg-green-500 px-4 py-1 rounded-md">Buy</button>
//                             <button className="bg-red-500 px-4 py-1 rounded-md">Sell</button>
//                         </div>
//                     </div>

//                     <div className="flex justify-between items-center bg-gray-700 p-4 rounded-md">
//                         <p className="font-semibold">Kamala Harris</p>
//                         <div className="flex items-center space-x-2">
//                             <span className="text-lg font-bold">35.5%</span>
//                             <button className="bg-green-500 px-4 py-1 rounded-md">Buy</button>
//                             <button className="bg-red-500 px-4 py-1 rounded-md">Sell</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
