const Hero = () => {
    return (
        <section className="text-center py-20 px-6">
        <h2 className="text-4xl font-bold text-gray-800">
          Bridging the Gap in Healthcare Access
        </h2>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          A blockchain-powered crowdfunding platform helping patients get access
          to life-saving treatments.
        </p>
        <div className="mt-6">
          <button className="bg-blue-600 hover:bg-[#3D8D7A] text-white px-6 py-3 rounded-md text-lg mx-2">
            Donate Now
          </button>
          <button className="bg-gray-800 text-white px-6 py-3 rounded-md text-lg mx-2">
            Learn More
          </button>
        </div>
      </section>
    );
}

export default Hero;