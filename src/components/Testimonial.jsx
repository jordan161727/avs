import React from "react";
import { motion } from 'framer-motion';

const testimonials = [
  {
    videoUrl: "https://www.youtube.com/embed/CaShN6mCJB0?si=yMuuJUc85jzw3g_T",
    name: "Anthony Thomas",
    title: "Business Owner/Model/Success Coach",
    quote:
      "The whole team with Yugorithm who I have worked with has been absolutely monumental for me getting things done, saving time, and creating top-notch things.",
  },
  {
    videoUrl: "https://www.youtube.com/embed/xoi-bDY_gmU?si=dUr6phCl1rAHM7dA",
    name: "Christina Russo",
    title: "Owner of Fresh Print Media",
    quote:
      "They have definitely helped me take my business to the next level. I would definitely recommend working with them.",
  },
  {
    videoUrl: "https://www.youtube.com/embed/6UysO9WpIF8?si=6XDhrkiXIwY64KDU",
    name: "Marika Laciste",
    title: "COO of Hubware",
    quote:
      "I am glad we were able to work with Yugorithm Global Services for our manpower needs. Their team has been very professional and persistent.",
  },
  {
    videoUrl: "https://www.youtube.com/embed/b073X2pt4gg?si=VY0RMtalOI_98Tr0",
    name: "Anthony Hartcher",
    title: "Clinical Nutritionist",
    quote:
      "They provide tremendous support around running my socials. Yugorithm takes care of the things I don't like doing so that I can focus on what I LOVE doing.",
  },
  {
    videoUrl: "https://www.youtube.com/embed/D-_i-UOrdUQ?si=yAbQNn46fMNWq1Km",
    name: "Paul do Ocampo",
    title: "Owner of OmniDrip",
    quote:
      "Scaling is about smart systems, not working harder. Test, build, and scale with virtual assistants.",
  },
  {
    videoUrl: "https://www.youtube.com/embed/9ChfpVc4Ckk?si=BS_-VAMecHfQDXlc",
    name: "Philipp Metzler",
    title: "Co-founder of Home Collective GmbH",
    quote:
      "Outsource, delegate, and empower remote teams to help your business thrive. 🌟🌐",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 px-6 bg-gray-100 min-h-screen">
      <h2 className="text-center text-3xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
      <p className="text-center text-gray-600 mb-10">
        Why our clients choose our virtual assistant services
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-48 rounded-lg"
                src={testimonial.videoUrl}
                title={`Testimonial from ${testimonial.name}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
              <p className="text-sm text-gray-600">{testimonial.title}</p>
              <p className="text-gray-700 mt-2 italic">"{testimonial.quote}"</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
