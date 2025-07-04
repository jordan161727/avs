import React, { useEffect, useRef, useState } from 'react';
import HeroLogo2 from '../assets/images/sad.jpg';

const Hero2 = () => {
  const [inView, setInView] = useState(false);  // Track the visibility of the text
  const textRef = useRef(null);  // Reference for the text elements

  // Intersection Observer to trigger animation when text comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          } else {
            setInView(false);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the element is in view
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-gray-100 flex flex-col md:flex-row items-center px-6 md:px-20 py-10 md:py-20 min-h-screen ">
      {/* Right Section */}
      <div className="flex-1 mt-10 md:mt-0 md:text-right">
        {/* Main Image */}
        <div>
          <img
            src={HeroLogo2} // Replace with your image path
            alt="Virtual Assistants"
            className="shadow-lg object-cover w-full h-full"
          />
        </div>
      </div>

      <div
        ref={textRef} // Attach the ref to the text container
        className={`flex-1 text-center transition-opacity duration-2000 transform ${
          inView ? 'opacity-100 translate-y-0 delay-300 transition-all duration-2000' : 'opacity-0 translate-y-12'
        }`}

      >
        <div className='ml-5'>
        <h1 className="text-3xl font-bold text-gray-800">
          Life is <span className="text-[#00B5B5]">TOO SHORT</span> to be stuck working 12+ hour days
        </h1>
        <p className="text-gray-600 mt-4">Get more done by outsourcing your tasks to virtual assistants.</p>
        <button className="mt-6 bg-[#0BB5B5] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-[#0A9E9E]">
          Get Started
        </button>
      </div>
        </div>
    </div>
  );
};

export default Hero2;
