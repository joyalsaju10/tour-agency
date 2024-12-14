// src/pages/enquiry.js
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Dropdown } from "flowbite-react";
import { Datepicker } from 'flowbite-react';
import Navbar from '../components/navBar';

export default function Enquiry() {
  const [formData, setFormData] = useState({
    name: "",
    contactNo: "",
    email: "",
    startDate: "",
    endDate: "",
    adults: "",
    children: "",
    places: [],
  });
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const options = ["Munnar", "Wayanad", "KanyaKumari", "FortKochi", "Athirapilly","Kovalam", "Thekkady", "Alleppey", "Vagamon","Sabarimala"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePlaceToggle = (place) => {
    const newPlaces = formData.places.includes(place)
      ? formData.places.filter((item) => item !== place)
      : [...formData.places, place];

    setFormData((prevData) => ({
      ...prevData,
      places: newPlaces,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "917907851594";
    const message = `Hello! I would like to plan a trip.
      \nName: ${formData.name}
      \nContact No: ${formData.contactNo}
      \nEmail: ${formData.email}
      \nStart Date: ${formData.startDate}
      \nEnd Date: ${formData.endDate}
      \nAdults: ${formData.adults}
      \nChildren: ${formData.children}
      \nPlaces: ${formData.places.join(", ")}
      
      Looking forward to your assistance. Thank you!
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    console.log(whatsappLink);
    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/bg-1.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-65"></div>
      <div className="relative z-10 p-4 sm:p-9 text-white">
        <Navbar />

        <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold font-serif mb-6 mt-20 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
          PLAN WITH US
        </h1>
        <p className="text-lg italic text-center mb-5">"Travel is the only thing you buy that makes you richer."</p>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-lg sm:max-w-xl md:max-w-3xl mx-auto">
          <div className="space-y-4">
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

            {/* Contact Number */}
            <div>
              <label className="block mb-2 text-sm font-medium text-white" htmlFor="contactNo">
                Contact Number
              </label>
              <input
                type="tel"
                id="contactNo"
                name="contactNo"
                value={formData.contactNo}
                onChange={handleChange}
                className="block w-full border border-gray-300 p-2 rounded-lg bg-transparent text-white"
                placeholder="Enter your contact number"
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

            {/* Dropdown */}
            <div>
              <label className="block mb-2 text-sm font-medium text-white">Choose Your Destinations</label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="block w-full text-left border border-gray-300 p-2 rounded-lg bg-transparent text-white"
                >
                  {formData.places.length > 0 ? formData.places.join(", ") : "Select destinations"}
                </button>

                {dropdownOpen && (
                  <ul className="absolute z-50 mt-1 w-full max-h-60 overflow-y-auto bg-white shadow-lg rounded-lg text-black">
                    {options.map((option, index) => (
                      <li key={index}>
                        <label className="flex items-center px-4 py-2 cursor-pointer hover:bg-transparent">
                          <input
                            type="checkbox"
                            className="mr-2"
                            checked={formData.places.includes(option)}
                            onChange={() => handlePlaceToggle(option)}
                          />
                          {option}
                        </label>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>

          {/* Right Side (Start Date, End Date, Adults, Children) */}
          <div className="space-y-4">
            {/* Start Date */}
            <div>
              <label className="block mb-2 text-sm font-medium text-white" htmlFor="startDate">Start Date</label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="block w-full border border-gray-300 p-2 rounded-lg bg-transparent text-white"
                placeholder="Select start date"
              />
            </div>

            {/* End Date */}
            <div>
              <label className="block mb-2 text-sm font-medium text-white" htmlFor="endDate">End Date</label>
              <input
                type="date"
                id="endDate"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                className="block w-full border border-gray-300 p-2 rounded-lg bg-transparent text-white"
                placeholder="Select end date"
              />
            </div>

            {/* Adults */}
            <div>
              <label className="block mb-1 text-sm font-medium text-white" htmlFor="adults">Adults</label>
              <input
                type="number"
                id="adults"
                name="adults"
                value={formData.adults}
                onChange={handleChange}
                className="block w-full border border-gray-300 p-2 rounded-lg bg-transparent text-white"
                min="1"
                placeholder="Number of adults"
                required
              />
            </div>

            {/* Children */}
            <div>
              <label className="block mb-2 text-sm font-medium text-white" htmlFor="children">Children</label>
              <input
                type="number"
                id="children"
                name="children"
                value={formData.children}
                onChange={handleChange}
                className="block w-full border border-gray-300 p-2 rounded-lg bg-transparent text-white"
                min="0"
                placeholder="Number of children"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="col-span-1 md:col-span-2 text-center mt-4">
            <button
              type="submit"
              className="mt-7 flex items-center justify-center bg-green-600 text-white px-3 py-2 rounded hover:bg-green-700 w-6/12 sm:w-3/12 mx-auto"
            >
              <img src="/images/whatsapp-icon.png" alt="WhatsApp" className="w-9 h-9 mr-2 sm:w-9 sm:h-9" />
              Book Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
