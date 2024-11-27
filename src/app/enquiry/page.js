// src/pages/enquiry.js
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Dropdown } from "flowbite-react";
import { Datepicker } from 'flowbite-react';
import Navbar from '../components/navBar';

export default function Enquiry() {
  const [formData, setFormData] = useState({
    name:"",
    contactNo:"",
    email:"",
    startDate: "",
    endDate: "",
    adults: "", 
    children: "",
    place: "",
  });
  const [selectedPlace, setSelectedPlace] = useState("Choose your destination");
  const options = ["Munnar","Wayanad", "KanyaKumari", "FortKochi" ,"Athirapilly","Kovalam","Alleppey","Vagamon",]

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

     const handlePlaceSelect = (place) => {
    setSelectedPlace(place); // Update the dropdown label
    setFormData((prevData) => ({
      ...prevData,
      place, // Update place in form data
    }));
  };

   // Define handleSubmit function
    const handleSubmit = (e) => {
    e.preventDefault();
    
  
    // Define the WhatsApp number (include country code, no spaces or special characters)
    const whatsappNumber = "919207321384"; // Replace with the actual WhatsApp number
  
    // Format the message with form data
    const message = `Hello! I would like to plan a trip.
      \nname: ${formData.name}
      \ncontact No: ${formData.contactNo}
      \nemail: ${formData.email}
      \nStart Date: ${formData.startDate}
      \nEnd Date: ${formData.endDate}
      \nadults: ${formData.adults}
      \nchildren: ${formData.children}
      \nPlace: ${formData.place}
      
      Looking forward to your assistance. Thank you!
    `.trim();
 
    // URL encode the message
    const encodedMessage = encodeURIComponent(message);
    
   // Create WhatsApp link
   const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    console.log(whatsappLink);

    // Redirect to WhatsApp
    window.open(whatsappLink, "_blank");
  };
  

  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/bg-1.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-65"></div>
      <div className="relative z-10 p-4 sm:p-9 text-white">

        {/* Navbar with Home button */}
        <Navbar />

        <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold font-serif mb-6 mt-20 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
          PLAN WITH US
        </h1>
  
        {/* Form Container */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-lg sm:max-w-xl md:max-w-3xl mx-auto">
          {/* Left Side (Name, Contact Number, Email, Dropdown) */}
          <div className="space-y-4 ">
            
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
                className="block w-full  border border-gray-300 p-2 rounded-lg focus:bg-transparent bg-transparent text-white"
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
                className="block w-full  border border-gray-300 p-2 rounded-lg bg-transparent text-white"
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
                className="block w-full border border-gray-300 p-2 rounded-lg   bg-transparent text-white"
                placeholder="Enter your email"
                required
              />
            </div>
  
            {/* Choose Your Destination Dropdown */}
            <div className="relative z-50  p-1 pt-4 space-y-4">
              <Dropdown label={selectedPlace} className="w-full">
                {options.map((option, index) => (
                  <Dropdown.Item
                    key={index}
                    onClick={() => handlePlaceSelect(option)}
                    className="bg-white  text-black hover:bg-gray-300"
                  >
                    {option}
                  </Dropdown.Item>
                ))}
              </Dropdown>
            </div>
          </div>
  
          {/* Right Side (Start Date, End Date, Adults, Children) */}
          <div className="space-y-4">
            {/* Start Date */}
            <div>
              <label className="block mb-2 text-sm font-medium text-white" htmlFor="startDate">
                Start Date
              </label>
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
              <label className="block mb-2 text-sm font-medium text-white" htmlFor="endDate">
                End Date
              </label>
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
              <label className="block mb-1 text-sm font-medium text-white" htmlFor="adults">
                Adults
              </label>
              <input
                type="number"
                id="adults"
                name="adults"
                value={formData.adults}
                onChange={handleChange}
                className="block w-full border border-gray-300 p-2 rounded-lg bg-transparent text-white"
                min="1"
                placeholder=" Number of adults"
                required
              />
            </div>
  
            {/* Children */}
            <div>
              <label className="block mb-2 text-sm font-medium text-white" htmlFor="children">
                Children
              </label>
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