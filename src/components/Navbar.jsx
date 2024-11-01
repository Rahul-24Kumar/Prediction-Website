'use client';
export default function Navbar() {
    return (
      <nav className="flex items-center justify-between bg-gray-800 px-6 py-4">
        <div className="text-white font-bold text-lg cursor-pointer" onClick={() => window.location.href = "/"}> Polymarket</div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-gray-300 hover:underline hover:text-pink-400 transition">Markets</a>
          <a href="#" className="text-gray-300 hover:underline hover:text-pink-400 transition">Election</a>
          <a href="#" className="text-gray-300 hover:underline hover:text-pink-400 transition">Sports</a>
          <a href="#" className="text-gray-300 hover:underline hover:text-pink-400 transition">Activity</a>
          <a href="#" className="text-gray-300 hover:underline hover:text-pink-400 transition">Ranks</a>
        </div>
        <div className="space-x-4">
          <button className="text-white">Log In</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Sign Up
          </button>
        </div>
      </nav>
    );
  }
  