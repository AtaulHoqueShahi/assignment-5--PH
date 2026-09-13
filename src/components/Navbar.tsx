import Logo from "../assets/logo-text.png";

const Navbar = () => {
  return (
    <div className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <img src={Logo} alt="Logo" className="h-8" />

        <ul className="hidden md:flex items-center gap-8">
          <li>
            <a
              href="#"
              className="text-pink-500 font-medium hover:text-pink-600 transition"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-500 font-medium hover:text-pink-500 transition"
            >
              Technologies
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-500 font-medium hover:text-pink-500 transition"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-500 font-medium hover:text-pink-500 transition"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-500 font-medium hover:text-pink-500 transition"
            >
              Contact
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-5">
          <a
            href="#"
            className="text-gray-700 font-medium hover:text-pink-500 transition"
          >
            Sign In
          </a>
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 hover:scale-105">
            Sign Up
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;