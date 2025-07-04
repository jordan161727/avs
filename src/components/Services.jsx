import React from 'react';
import { motion } from 'framer-motion';
import { FaUsersSlash, FaChartLine, FaUserClock } from 'react-icons/fa';

const Services = () => {
    const services = [
        { title: "Avoid Hiring Hassle", icon: <FaUsersSlash className="text-5xl text-[#0BB5B5]" /> },
        { title: "Increase Your Profits", icon: <FaChartLine className="text-5xl text-[#0BB5B5]" /> },
        { title: "Have More Free Time", icon: <FaUserClock className="text-5xl text-[#0BB5B5]" /> }
    ];

    return (
        // <div className="py-16 px-8 min-h-screen">
        //     <h2 className="text-4xl font-bold text-center text-gray-800">Get More Work Done</h2>
        //     <h3 className="text-3xl font-bold text-center text-green-500 mt-2">WHILE WORKING LESS WITH YOUR VIRTUAL ASSISTANT</h3>
        //     <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
        //         {services.map((service, index) => (
        //             <motion.div
        //                 key={index}
        //                 initial={{ opacity: 0, x: -50 }}
        //                 whileInView={{ opacity: 1, x: 0 }}
        //                 viewport={{ once: false, amount: 0.3 }}
        //                 transition={{ duration: 0.8, delay: index * 0.2 }}
        //                 className="p-8 bg-white rounded-lg shadow-md text-center"
        //             >
        //                 <div className="flex justify-center items-center mb-4">
        //                     <div className="bg-blue-900 p-4 rounded-full">{service.icon}</div>
        //                 </div>
        //                 <h3 className="text-4xl font-semibold text-gray-700">{service.title}</h3>
        //             </motion.div>
        //         ))}
        //     </div>
        // </div>
        <div className="py-24 px-24 min-h-screen">
  <h2 className="text-4xl font-bold text-center text-[#db619e]">Get More Work Done</h2>
  <h3 className="text-3xl font-bold text-center text-[#0BB5B5] mt-2">
    WHILE WORKING LESS WITH YOUR VIRTUAL ASSISTANT
  </h3>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
    {services.map((service, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, delay: index * 0.2 }}
        className="flex flex-col items-center justify-center p-10 bg-white rounded-2xl shadow-lg text-center"
      >
        <div className="flex justify-center items-center mb-6">
          <div className="bg-[#db619e] p-5 rounded-full text-white text-3xl">
            {service.icon}
          </div>
        </div>
        <h3 className="text-2xl font-semibold text-gray-700">{service.title}</h3>
      </motion.div>
    ))}
  </div>
</div>
    );
};

export default Services;