"use client";

import { useState } from "react";
import Navbar from "../components/navBar";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
       

    const whatsappNumber = "919207321384"; // Replace with your WhatsApp number
    // Format the message with form data
    const message = `Hello! I would like to contact you.
      \nName: ${formData.name}
      \nEmail: ${formData.email}
      \nMessage: ${formData.message}
    `.trim();

    // Create WhatsApp link
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    console.log(whatsappLink);
    // Redirect to WhatsApp
    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/bg-2.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-65"></div>
      <div className="relative z-10 p-8 text-white">
        {/* Navbar with Home button */}
        <Navbar />

        <h1 className="text-5xl font-extrabold font-serif mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mt-20">Contact Us</h1>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6 bg-transparent p-6 rounded-lg shadow-lg">
          {/* Name */}
          <div>
            <label className="block mb-2 text-sm font-medium text-white" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="block w-full border border-gray-300 p-2 rounded-lg bg-transparent text-white"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-sm font-medium text-white" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="block w-full border border-gray-300 p-2 rounded-lg bg-transparent text-white"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 text-sm font-medium text-white" htmlFor="feedback">
              Feedback
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="block w-full border border-gray-300 p-2 rounded-lg bg-transparent text-white"
              placeholder="Enter your feedback"
              rows="4"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-00"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Contact Information Section */}
        <div className="mt-8 text-center text-white">
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>

          {/* Email Us */}
          <div className="mb-4">
            <p className="text-lg">Email Us</p>
            <a
              href="mailto:contact@yourdomain.com"
              className="text-green-600 hover:text-green-800"
            >
              tss288745@gmail.com
            </a>
          </div>

          {/* Contact Us (Phone) */}
          <div className="mb-4">
            <p className="text-lg">Call Us</p>
            <a
              href="tel:+919567185249"
              className="text-green-600 hover:text-green-800"
            >
              +919567185249
              +918547493116
              +918075163779
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
