'use client';
import { notFound } from 'next/navigation';

export default function MarketDetail({ params }) {
    const { title } = params;

    if (!title) {
        notFound(); // Handle case where title is missing
    }

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

                {/* Graph Placeholder */}
                <div className="bg-gray-700 rounded-md h-64 mb-8 flex items-center justify-center">
                    <p className="text-gray-500">Graph will appear here</p>
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
