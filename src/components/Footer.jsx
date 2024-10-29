import { FaDiscord, FaInstagram, FaTiktok, FaGamepad } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-neutral-content p-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Branding Section */}
        {/* <aside className="flex flex-col items-center md:items-start space-y-4">
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z" />
          </svg>
          <p className="text-center md:text-left">
            <strong>ACME Industries Ltd.</strong>
            <br />
            Providing reliable tech since 1992
          </p>
        </aside> */}
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

        {/* Links and Community Section */}
        <div className="flex flex-col md:flex-row justify-between w-full space-y-10 md:space-y-0">

          {/* Links Section */}
          <div className="grid grid-cols-2 space-x-16 gap-8">
            <div>
              <h2 className="font-semibold mb-4 text-lg">Markets</h2>
              <ul className="space-y-2">
                {["Politics", "Crypto", "Sports", "Pop Culture", "Business", "Science", "All"].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:underline hover:text-pink-400 transition">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-semibold mb-4 text-lg">Resources</h2>
              <ul className="space-y-2">
                {["Contact", "Learn", "Developers", "Blog", "Elections", "Careers", "Newsletter"].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:underline hover:text-pink-400 transition">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            <h2 className="font-semibold text-lg">Join the community</h2>
            <div className="flex space-x-6 text-2xl">
              <a href="#" className="hover:text-white transition">
                <FaDiscord />
              </a>
              <a href="#" className="hover:text-white transition">
                <FaGamepad />
              </a>
              <a href="#" className="hover:text-white transition">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-white transition">
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
