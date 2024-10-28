import { FaDiscord, FaInstagram, FaTiktok, FaGamepad } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-10 text-neutral-content">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Left Section: Branding and Badges */}
        <div className="flex flex-col justify-start">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path d="M12 0l11.196 6v12l-11.196 6-11.196-6v-12l11.196-6zm.692 10.287l5.308 3.077v-6.154l-5.308-3.077-5.308 3.077v6.154l5.308-3.077zm.692 11.292v-6.154l-5.308-3.077-5.308 3.077 5.308 3.077 5.308-3.077v6.154z" />
            </svg>
            <h1 className="text-lg font-bold">Polymarket</h1>
          </div>
          <p className="mt-2 text-sm">The world's largest prediction market.</p>

          {/* Badges */}
          <div className="flex gap-2 mt-4">
            <div className="bg-neutral-focus px-3 py-1 rounded-lg text-sm flex items-center gap-1">
              <span className="text-purple-400">🔗 Powered by UMA</span>
            </div>
            <div className="bg-neutral-focus px-3 py-1 rounded-lg text-sm">
              ✅ All systems operational
            </div>
          </div>
        </div>

        {/* Right Section: Contains Markets, Resources, and Social Links */}
        <div className="col-span-2 flex justify-between">
          {/* Markets and Resources */}
          <div className="flex gap-20">
            <div>
              <h2 className="font-semibold mb-2">Markets</h2>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Politics</a></li>
                <li><a href="#" className="hover:underline">Crypto</a></li>
                <li><a href="#" className="hover:underline">Sports</a></li>
                <li><a href="#" className="hover:underline">Pop Culture</a></li>
                <li><a href="#" className="hover:underline">Business</a></li>
                <li><a href="#" className="hover:underline">Science</a></li>
                <li><a href="#" className="hover:underline">All</a></li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold mb-2">Resources</h2>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Contact</a></li>
                <li><a href="#" className="hover:underline">Learn</a></li>
                <li><a href="#" className="hover:underline">Developers</a></li>
                <li><a href="#" className="hover:underline">Blog</a></li>
                <li><a href="#" className="hover:underline">Elections</a></li>
                <li><a href="#" className="hover:underline">Careers</a></li>
                <li><a href="#" className="hover:underline">Newsletter</a></li>
              </ul>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-end">
            <h2 className="font-semibold mb-2">Join the community</h2>
            <div className="flex gap-4 text-2xl">
              <a href="#" className="hover:text-white">
                <FaDiscord />
              </a>
              <a href="#" className="hover:text-white">
                <FaGamepad />
              </a>
              <a href="#" className="hover:text-white">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-white">
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
