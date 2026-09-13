
import FooterLogo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

         
          <div>
            <img
              src={FooterLogo}
              alt="logo"
              className="h-8 mb-5"
            />

            <p className="text-gray-500 text-sm leading-relaxed mb-5 max-w-xs">
              Curated tools, technologies, and resources for developers building modern software.
            </p>

            <div className="flex items-center gap-5 text-sm text-gray-500">
              <a href="#" className="hover:text-pink-500 transition">
                GitHub
              </a>
              <a href="#" className="hover:text-pink-500 transition">
                Twitter
              </a>
              <a href="#" className="hover:text-pink-500 transition">
                LinkedIn
              </a>
            </div>
          </div>

         
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider mb-4">
              PRODUCT
            </h3>

            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-pink-500 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#technologies" className="hover:text-pink-500 transition">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500 transition">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider mb-4">
              COMPANY
            </h3>

            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-pink-500 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500 transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500 transition">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider mb-4">
              LEGAL
            </h3>

            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-pink-500 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500 transition">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-pink-500 transition">
              Privacy
            </a>
            <a href="#" className="hover:text-pink-500 transition">
              Terms
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
