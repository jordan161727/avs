import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import HeroImg1 from "../assets/images/krakenimages-376KN_ISplE-unsplash.jpg";
import HeroImg2 from "../assets/images/hero1.jpg";
import HeroImg3 from "../assets/images/hero2.jpg";
import HeroImg4 from "../assets/images/imgi_34_side-wave_background.png";



const Hero = () => {
  return (
    
    <div  
    style={{ backgroundImage: `url(${HeroImg4})` }}
    className="bg-cover bg-center bg-no-repeat  flex flex-col md:flex-row items-center px-6 md:px-20 py-10 md:py-20 min-h-screen">
      {/* Left Section */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl font-bold text-gray-800 leading-tight">
          Affordable and world-class <br />
            <span className="text-[#db619e]">VIRTUAL ASSISTANT SERVICES</span>
        </h1>
        <p className="text-gray-600 mt-4">
          Hiring our virtual assistant services is like getting your own
          department for your business. You get a whole team for an affordable price.
        </p>
        <div className="mt-6 flex justify-center md:justify-start gap-4">
          <button className="bg-pink-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-pink-700">
           Schedule a Consultation
          </button>
        </div>
      </div>

      {/* Right Section - Swiper Carousel */}
      <div className="flex-1 mt-10 md:mt-0 flex justify-center">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          // navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          className="w-[80%] max-w-sm md:max-w-md lg:max-w-lg shadow-lg rounded-lg"
        >
          <SwiperSlide>
            <img
              src={HeroImg1}
              alt="Virtual Assistant 1"
              className="rounded-lg shadow-lg object-cover w-full h-auto"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={HeroImg2}
              alt="Virtual Assistant 2"
              className="rounded-lg shadow-lg object-cover w-full h-auto"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={HeroImg3}
              alt="Virtual Assistant 3"
              className="rounded-lg shadow-lg object-cover w-full h-auto"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
