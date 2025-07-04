import React from 'react';
import { motion } from 'framer-motion';
import { FaUserTie, FaClipboardCheck, FaClock } from "react-icons/fa";

const BenifitSection = () => {
  return (
    <div className="py-16 px-24 flex flex-col md:flex-row items-center justify-between min-h-screen">
      {/* Left Content */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: false, amount: 0.3 }} 
        transition={{ duration: 0.8 }}
        className="md:w-1/2"
      >
        <h2 className="text-3xl font-bold text-gray-900">
          <span className="text-black font-extrabold">We Know</span> Running A Business Is Challenging, It Can Be Stressful And Overwhelming
        </h2>
        <p className="text-gray-700 mt-4 text-md">
          But... your business will provide <span className="text-[#db619e] font-bold">FREEDOM</span> with the right VA's!
        </p>
        <button className="mt-6 bg-[#0BB5B5] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-[#0A9E9E]">
          Get Started
        </button>
      </motion.div>

      {/* Right Content (Stats) */}
      <div className="md:w-1/2 flex flex-col space-y-4 mt-8 md:mt-0">
        {[{
          icon: <FaUserTie className=" text-[#db619e] text-3xl mr-4" />, 
          text: "Backed by Real Experience, Even as a New Company Though we’re a startup ourselves"
        }, {
          icon: <FaClipboardCheck className=" text-[#db619e] text-3xl mr-4" />, 
          text: "Trusted Talent, Fresh Perspective We may be new"
        }, {
          icon: <FaClock className=" text-[#db619e] text-3xl mr-4" />, 
          text: "Time-Saving from Day One Even in our first year"
        }].map((item, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: false, amount: 0.3 }} 
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="bg-[#00B5B5] text-white p-4 rounded-lg flex items-center shadow-md w-full h-24"
          >
            {item.icon}
            <span className="text-lg">{item.text}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default BenifitSection;