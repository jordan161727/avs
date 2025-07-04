import React, { useState } from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import contactImage from '../assets/images/contact.jpg'; // Adjust path as needed

const ContactForm = () => {
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    role: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', form);
    setSubmitted(true);

    setForm({
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      role: '',
      message: '',
    });

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 p-8">
      {/* Left Column */}
      <div className="md:w-1/2">
        <img src={contactImage} alt="Contact" className="rounded-xl w-full" />
        <ul className="mt-6 space-y-3 text-left">
          <li>✅ Engaging video & graphic content tailored to your audience</li>
          <li>✅ Strategic planning with consistent, on-brand execution</li>
          <li>✅ Results-focused campaigns that drive visibility and growth</li>
        </ul>
        <div className="flex mt-6 gap-4 text-lg">
          <a href="https://www.linkedin.com/company/analytics-virtual-solutions/about/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-blue-700 hover:text-blue-900" />
          </a>
          <a href="mailto:analyticsvirtualsolutuons@gmail.com">
            <FaEnvelope className="text-red-600 hover:text-red-800" />
          </a>
        </div>
      </div>

      {/* Right Column */}
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold mb-6">Contact Form</h2>

        {/* ✅ "Get in Touch" Section */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Get in Touch</h3>
          <a
            href="mailto:analyticsvirtualsolutuons@gmail.com"
            className="inline-flex items-center text-[#0BB5B5] hover:underline"
          >
            <FaEnvelope className="mr-2" />
         analyticsvirtualsolutuons@gmail.com
          </a>
        </div>

        {/* ✅ Success Message */}
        {submitted && (
          <div className="mb-4 p-3 bg-green-100 text-green-800 rounded">
            🎉 Thank you! We'll get back to you soon.
          </div>
        )}

        {/* ✅ Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-4">
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              value={form.first_name}
              onChange={handleChange}
              required
              className="w-1/2 p-2 border rounded"
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              value={form.last_name}
              onChange={handleChange}
              required
              className="w-1/2 p-2 border rounded"
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="role"
            placeholder="What's your role in the company?"
            value={form.role}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full p-2 border rounded resize-none"
          />
          <button
            type="submit"
            className="bg-[#0BB5B5] hover:bg-[#0A9E9E] text-white py-2 px-4 rounded-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
