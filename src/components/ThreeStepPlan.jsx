import React from "react";
import { useState } from 'react';

const steps = [
  {
    number: "01",
    title: "DEFINE YOUR TASKS OR SERVICE NEEDS",
    description: "Complete your simple role description form (RDF) to clearly define your tasks and projects your VA will complete.",
  },
  {
    number: "02",
    title: "VA MATCH BY PERSONALITY AND SKILLS",
    description: "Your needs (tasks and projects) are matched with a VA using our proven Personality and Skills Profile Match System (PSPM).",
  },
  {
    number: "03",
    title: "SAVE TIME AND MONEY",
    description: "Get your VA started and you'll quickly experience having more work done, in less time, with more profit.",
  },
];

const ThreeStepPlan = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="py-16 px-6">
      <h2 className="text-center text-3xl font-bold text-gray-900 mb-10">YOUR 3-STEP PLAN TO FREEDOM</h2>

      <div className="max-w-3xl mx-auto space-y-8">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center gap-6">
            {/* Circular Number */}
            <div className="flex items-center justify-center w-16 h-16 bg-white border-2 border-gray-300 rounded-full text-blue-900 font-bold text-2xl shadow-md">
              {step.number}
            </div>

            {/* Step Content */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
              <p className="text-gray-700 mt-2">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Call-to-Action */}
      <div className="mt-12 text-center">
        <h3 className="text-xl font-bold text-gray-900">
          The market is flooded with{" "}
          <span className="text-[#0BB5B5]">cheap, untrained and inexperienced</span> virtual assistants...
        </h3>
        <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
          Some VA services pitch you "saving time and money" while wasting both with low-quality virtual assistants.
          After hiring VAs, we know that cheaper VAs are less loyal and more likely to leave for slightly more pay.
        </p>
        
        {showMore && (
          <div className="mt-4 text-gray-700 max-w-2xl mx-auto text-left">
            <p className="mt-2">
              When you hire an untrained VA, you spend more time managing them, correcting mistakes, and redoing work. 
              This not only adds stress but also costs you more in the long run. Our carefully vetted VAs are trained to hit the ground running, 
              ensuring you get results without micromanagement.
            </p>
            <p className="mt-2">
              Investing in a high-quality VA means investing in stability, efficiency, and long-term success. 
              Our system ensures that each VA is not just skilled but also aligned with your company’s values and goals, leading to better retention and productivity.
            </p>
            <p className="mt-2">
              Don’t fall for the trap of short-term savings that lead to long-term headaches. Choose a VA that will truly make a difference in your business.
            </p>
          </div>
        )}
        
        <button
          onClick={() => setShowMore(!showMore)}
          className="mt-4 text-[#0BB5B5] font-semibold hover:underline"
        >
          {showMore ? "Show Less" : "Continue Reading..."}
        </button>
      </div>
    </section>
  );
};

export default ThreeStepPlan;
