import React from "react";

const VACommunity = () => {
  const profileImages = [
    // Replace these URLs with actual profile image URLs
    "https://randomuser.me/api/portraits/women/1.jpg",
    "https://randomuser.me/api/portraits/men/2.jpg",
    "https://randomuser.me/api/portraits/women/3.jpg",
    "https://randomuser.me/api/portraits/men/4.jpg",
    "https://randomuser.me/api/portraits/women/5.jpg",
    "https://randomuser.me/api/portraits/men/6.jpg",
    "https://randomuser.me/api/portraits/women/7.jpg",
    "https://randomuser.me/api/portraits/men/8.jpg",
    "https://randomuser.me/api/portraits/men/7.jpg",
    "https://randomuser.me/api/portraits/women/6.jpg",
  ];

  return (
    <div className="flex flex-col items-center text-center p-10 bg-white">
      <h2 className="text-3xl font-bold text-black">Join The Movement</h2>
      <p className="mt-4 text-gray-600 max-w-2xl">
        By working with <span className="italic font-semibold">Avs </span> and our amazing Virtual Assistants, 
        you're not just helping your own business, you're creating a life of opportunity for the VAs and their families.
      </p>
      <p className="mt-2 text-gray-600 max-w-2xl">
        Have confidence in knowing that you are part of something big, making an impact far greater than you can imagine. 
        This impact is why we do what we do. Join us in this movement.
      </p>

      <div className="w-10 h-1  bg-[#0BB5B5] my-4"></div>

      {/* Profile Images Grid */}
      <div className="mt-6 grid grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3">
        {profileImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Profile ${index + 1}`}
            className="w-16 h-16 rounded-full border-2 border-white shadow-md object-cover"
          />
        ))}
      </div>

      <p className="mt-6 text-[#0BB5B5] text-xl font-bold italic">
        A few from our growing VA community
      </p>
    </div>
  );
};

export default VACommunity;
