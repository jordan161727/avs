import React from "react";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUserTie, FaTasks, FaPhoneAlt, FaLaptopCode, FaClipboardList, FaBullhorn, FaPaintBrush, FaFacebookF } from "react-icons/fa";

const services = [
  {
    title: "Dedicated VAs",
    description: "Dedicated VAs give you the specialized support you need to grow your business with less effort and more output.",
    icon: <FaUserTie className="text-3xl text-[#00B5B5]" />,
    link: "#",
    buttonText: "Hire a VA",
  },
  {
    title: "Website Development & Design",
    description: "Bespoke websites built for performance, user experience, and brand alignment Responsive, mobile-optimized, and SEO-friendly",
    icon: <FaLaptopCode className="text-3xl text-[#00B5B5]" />,
    link: "#contactform",
    buttonText: "Hire a VA",
  },
  {
    title: "Graphics and Video Editing",
    description: "Tailor-made visual content that tells your story and elevates your brand,Motion graphics, reels, promos, and branding kits",
    icon: <FaPaintBrush className="text-3xl text-[#00B5B5]" />,
    link: "#contactform",
    buttonText: "Hire a VA",
  },
  {
    title: "Social Media & Email Marketing",
    description: "Customized campaigns based on your audience behavior and marketing goals Calendar planning, automation, and analytics",
    icon: <FaFacebookF  className="text-3xl text-[#00B5B5]" />,
    link: "#contactform",
    buttonText: "Hire a VA",
  },
  {
    title: "Email and Content Copywriting",
    description: "Strategic messaging crafted for your tone, industry, and conversion goals,Email sequences, landing pages, blogs, and product copy",
    icon: <FaClipboardList className="text-3xl text-[#00B5B5]" />,
    link: "#contactform",
    buttonText: "Hire a VA",
  },
  {
    title: "Lead Generation",
    description: "Personalized lead sourcing strategies aligned with your target market,B2B/B2C funnels, CRM integration, and outreach optimization",
    icon: <FaBullhorn className="text-3xl text-[#00B5B5]" />,
    link: "#contactform",
    buttonText: "Hire a VA",
  },
];

const BusinessServices = () => {
  return (
    <section className="py-16 px-24">
      <h2 className="text-center text-3xl font-bold text-gray-900 mb-10">Our Tailored Services</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                className="bg-white shadow-lg rounded-xl p-6 text-center border border-gray-200">
            <div className="flex justify-center items-center mb-4">
              <div className="bg-[#db619e] p-4 rounded-full">{service.icon}</div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
            <p className="text-gray-700 mt-3">{service.description}</p>
            <a href={service.link} className="mt-4 inline-block bg-[#00B5B5] text-white px-5 py-2 rounded-lg shadow-md hover:bg-[#0A9E9E]">
              {service.buttonText}
            </a>
            </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BusinessServices;
