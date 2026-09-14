import Banner from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <section id="home" className="bg-white pt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Hero Content */}
        <div className="flex-1 max-w-xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
            Build Your Ideal{" "}
            <span className="bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#technologies"
              className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-7 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-md"
            >
              Explore Technologies
            </a>

            <a
              href="#about"
              className="border border-gray-300 hover:border-pink-400 text-gray-700 hover:text-pink-500 px-7 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <img
            src={Banner}
            alt="Development stack illustration"
            className="w-full max-w-md lg:max-w-lg drop-shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;