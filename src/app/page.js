'use client';
import React from "react";

import Hero from "../components/Hero";
import MarketGrid from "../components/MarketGrid";


export default function Home() {
 
  return (
    <div className="min-h-screen bg-gray-900 text-white">
    
      <Hero />
      <div className="flex justify-center space-x-4 p-6">
        <button className="px-4 py-2 bg-gray-700 rounded-md">New</button>
        <button className="px-4 py-2 bg-gray-700 rounded-md">Trending</button>
        <button className="px-4 py-2 bg-gray-700 rounded-md">Politics</button>
      </div>
      <MarketGrid />
    </div>
  );
}
