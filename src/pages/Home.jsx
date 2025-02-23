import React from "react";
import Hero from "../components/Hero";
import Feature from "../components/Feature";

const HomePage = () => {
  return (
    <div>
      <Hero />
      {/* Call to Action */}
      <section className="text-center py-12 bg-blue-600 text-white">
        <h2 className="text-2xl font-bold">Join Us in Saving Lives</h2>
        <p className="mt-2 text-lg">
          Start a campaign or donate today to make a difference.
        </p>
        <div className="mt-4">
          <button className="bg-white text-blue-600 px-6 py-3 rounded-md mx-2">
            Start a Campaign
          </button>
          <button className="bg-gray-800 text-white px-6 py-3 rounded-md mx-2">
            Learn More
          </button>
        </div>
      </section>
      <Feature />
    </div>
  );
};

export default HomePage;
