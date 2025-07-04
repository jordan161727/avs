import React from "react";
import bgVideo from '../assets/video/bg1.mp4';
import bgImage from '../assets/images/bg1.jpg'; // Assuming you have a background image  

const AboutUs = () => {
  return (
    <div className="bg-white text-gray-600 font-sans">
      {/* Intro Section */}
    <section className="flex flex-col md:flex-row items-center justify-between px-6 py-12">
  <img
    src={bgImage}
    alt="Team Meeting"
    className="rounded-xl w-full md:w-1/2"
  />
  <div className="mt-6 md:mt-0 md:ml-12 md:w-1/2">
    <h2 className="text-3xl font-bold mb-4 text-[#db619e]">Mission Statement</h2>
    <p className="text-sm mb-4">
      At AVS, our mission is to empower businesses by providing tailored digital solutions that align
      with their unique goals, brand identity, and growth strategy. From custom website development and
      eye-catching visual content to targeted digital marketing and compelling copywriting, we partner
      with clients to build their online presence and drive measurable results.
    </p>
    <p className="text-sm mb-6">
      We strive to be more than a service provider—we are your virtual growth partner, dedicated to delivering
      innovative, scalable, and data-informed solutions that help you thrive in the digital space.
    </p>

    <h2 className="text-3xl font-bold mb-4 text-[#db619e]">Vision Statement</h2>
    <p className="text-sm">
      To be a globally trusted digital solutions company, renowned for our personalized approach, creative
      excellence, and client success. We envision AVS as the leading choice for businesses seeking strategic,
      customized digital services that inspire action, build connection, and generate sustained growth.
    </p>
  </div>
</section>

      {/* Visual Section */}
      <section className="bg-[#121212] px-6 py-12 text-center">
        <h3 className="text-2xl font-bold mb-4 text-white">
          Enhancing Brands, Boosting Achievement
        </h3>
        <video
          className="rounded-xl mx-auto w-full md:w-3/4"
          src={bgVideo}
          autoPlay
          muted
          loop
          playsInline
        ></video>
      </section>
    </div>
  );
};

export default AboutUs;
