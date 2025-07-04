import Hero from '../components/Hero';
import Hero2 from '../components/Hero2';
import Services from '../components/Services';
import BenefitsSection from '../components/BenifitSection'
import Testimonial from '../components/Testimonial'
import BusinessServices from '../components/BusinessServices';
import ThreeStepPlan from '../components/ThreeStepPlan';
import Footer from '../components/Footer';
import Va from '../components/VACommunity';
import AboutPage from '../components/AboutUs';
import ContactForm from '../components/ContactForm';
import React from 'react';


function HomePage() {
  return (
    <>
    <Hero />
    <Hero2 />
    <section id="about"><AboutPage/></section>
    <Services />
    <section id="testimonials"><Testimonial /></section>
    <BenefitsSection />
    <section id="services"> <BusinessServices /></section>
    <ThreeStepPlan />
    <Va />
    <section id="contactform"> <ContactForm /></section>
    <Footer />
    
   </>
  );
}

export default HomePage