"use client";

import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from './components/navBar';
import PanoramaSlider from './components/home/gallery';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


export default function Home() {
  return (
    <div className="bg-slate-800">
      <main className="min-h-screen">

        {/* Logo Section */}
        <div className="absolute top-2 opacity-60 hover:opacity-100 transition-opacity duration-300 left-0 right- z-10 sm:top-2 sm:left-2">
          <Image
            src="/images/royalodyssey.png"  // Path to your logo image
            alt="Logo"
            width={100}             
            height={50}             
            layout="intrinsic"
            className="sm:w-32 sm:h-12 md:w-40 md:h-16 lg:w-48 lg:h-20" // Adjust logo size for small, medium, and large screens
          />
        </div>

        {/* Background Image Section */}
        <div
          className="relative bg-cover bg-center bg-no-repeat home-background"
          style={{
            backgroundImage: `url('/images/bg-main.jpg')`,
            minHeight: "500px", // Use minHeight for better responsiveness
          }}
        >
          <div className="absolute inset-0 bg-slate-800 bg-opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <h1 className="text-5xl sm:text-5xl md:text-7xl lg:text-7xl text-center font-extrabold text-white">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-cyan-500">
                Go Live, Explore 
              </span>
            </h1>
          </div>
          <Navbar />
        </div>

        {/* Content Section */}
        <div className="pt-9 pb-10">
          <PanoramaSlider />
        </div>


        {/* About Us Section */}
        <section
           id="about" 
           className="bg-slate-800 text-white py-14">
          <div className="w-full max-w-4xl mx-auto px-4 space-y-12">
            {/* Intro Section */}
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300">
                Welcome to Royal Odyssey
              </h2>
              <p className="mt-4 text-sm md:text-base text-gray-300">
                Discover unforgettable travel experiences with us. We provide expertly curated tour packages to Kerala's most stunning destinations.
                Our mission is to make travel easy, accessible, and enriching for everyone. Whether you're looking for adventure, relaxation, or cultural immersion, we have the perfect package for you.
              </p>
            </div>



        {/* Package Activities Section */}
<section id="activities" className="py-14 bg-slate-800">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">
      Exciting Activities
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        {
          title: "Jeep Safari",
          images: [
            { src: "/images/Jeep-safari1.jpg", caption: "Jeep Safari Munnar" },
            { src: "/images/jeep-safari2.jpg", caption: "Jeep Safari Munnar" },
            { src: "/images/jeep-safari3-vagamon.jpg", caption: "Jeep Safari Vagamon" },
            { src: "/images/jeep-safari4-thekkady.jpg", caption: "Jeep Safari Thekkady" },

          ],
          description: "Experience an exciting jeep safari through the wild."
        },
        {
          title: "Kathakali",
          images: [
            { src: "/images/Kathakali munnar.jpeg", caption: "Kathakali Munnar" },
            { src: "/images/Kathakali munnar1.jpeg", caption: "Kathakali Munnar" },
            { src: "/images/Kathakali thekkady.jpeg", caption: "Kathakali Thekkady" },
            { src: "/images/Kathakali thekkady1.jpeg", caption: "Kathakali Thekkady" },
          ],
          description: "Enjoy the traditional dance-drama of Kerala."
        },
        {
          title: "Kalari Show",
          images: [
            { src: "/images/Kalaripayattu-thekkady.jpg", caption: "Kalaripayattu-thekkady" },
            { src: "/images/Kalaripayattu-thekkady1.jpg", caption: "Kalaripayattu-thekkady" },
            { src: "/images/Kalaripayattu-thekkady2.jpg", caption: "Kalaripayattu-thekkady" },
            { src: "/images/Kalaripayattu-thekkady3.jpg", caption: "Kalaripayattu-thekkady" },
          ],
          description: "Witness the ancient martial arts of Kerala."
        },
        {
          title: "Boating",
          images: [
            { src: "/images/House Boating Alleppey.jpg", caption: "House Boating Alleppey" },
            { src: "/images/Boating Alleppey.jpg", caption: "Boating Alleppey" },
            { src: "/images/Boating munnar.jpeg", caption: "Boating munnar" },
            { src: "/images/munnar boating.jpg", caption: "Boating munnar" },
          ],
          description: "Relax while cruising along Kerala's tranquil backwaters."
        },
        {
          title: "Spice Garden Visit",
          images: [
            { src: "/images/spice garden thekkady.jpeg", caption: "spice garden Thekkady" },
            { src: "/images/spice garden munnar.jpg", caption: "Spice Garden Munnar" },
          ],
          description: "Explore the fragrant spice gardens of Kerala."
        },
        {
          title: "Flower Garden Visit",
          images: [
            { src: "/images/flower garden munnar.jpeg", caption: "Flower Garden Munnar" },
            { src: "/images/flower garden munnar1.jpeg", caption: "Flower Garden Munnar" },
            { src: "/images/flower garden thekkady.jpeg", caption: "Flower Garden Thekkady" },
            { src: "/images/flower garden thekkady1.jpeg", caption: "Flower Garden Thekkady" },
          ],
          description: "Experience the vibrant colors and tranquility of curated flower gardens."
        },
      ].map((activity, index) => (
        <div
          key={index}
          className="relative flex flex-col items-center text-center p-6 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
        >
          {/* Activity Title */}
          <h3 className="text-lg font-semibold text-white mb-4">{activity.title}</h3>

          {/* Swiper Slider */}
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            navigation
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
            className="w-full h-48 mb-4 rounded-lg overflow-hidden"
          >
            {activity.images.map((image, idx) => (
              <SwiperSlide key={idx} className="relative">
                <img
                  src={image.src}
                  alt={activity.title}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-sm py-2 px-4">
                  {image.caption}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Description */}
          <p className="text-sm text-gray-300">{activity.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>


       <section id="why-choose-us" className="py-9 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              {
                title: "Expertly Curated Packages",
                icon: "/icons/curated-packages.svg",
              },
              {
                title: "Affordable Pricing",
                icon: "/icons/affordable-pricing.svg",
              },
              {
                title: "Exceptional Support",
                icon: "/icons/customer-support.svg",
              },
              {
                title: "Personalized Experiences",
                icon: "/icons/personalized.svg",
              },
              {
                title: "Pickup & Drop",
                icon: "/icons/pickup-drop.svg",
              },
              {
                title: "Unforgettable Destinations",
                icon: "/icons/destinations.svg",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center justify-center text-center p-6 bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
              >
                {/* Icon Section */}
                <div className="w-16 h-16 mb-4 flex items-center justify-center bg-gradient-to-tr from-cyan-500 to-white-400 rounded-full shadow-md">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                {/* Text Section */}
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-300">
                  {index === 0 && "Handpicked experiences tailored for you."}
                  {index === 1 && "Affordable packages without hidden fees."}
                  {index === 2 && "24/7 support for all your travel needs."}
                  {index === 3 && "Unique, personalized travel experiences."}
                  {index === 4 && "Convenient pickup and drop services."}
                  {index === 5 && "Explore breathtaking destinations."}
                </p>
              </div>
            ))}
          </div>
        </div>
     </section>



                {/* Vision & Mission */}
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-white">
          Our Vision
        </h3>
        <p className="mt-4 text-sm md:text-base text-gray-300">
          To be the leading travel company offering exceptional experiences and creating memories that last a lifetime.
        </p>
      </div>
      <div className="text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-white">
          Our Mission
        </h3>
        <p className="mt-4 text-sm md:text-base text-gray-300">
          To provide personalized and seamless travel solutions while promoting sustainability, cultural exchange, and respect for the environment.
        </p>
      </div>
    </div>

   {/* Unique Features */}
<div className="mt-10">
  <h3 className="text-2xl md:text-3xl font-bold text-center text-white">
    What Makes Us Unique?
  </h3>
  <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-gray-300 text-sm md:text-base">
    {/* Handpicked Destinations */}
    <li className="flex items-center">
      <span className="mr-4 text-green-500">
        {/* Map Pin Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zM12 21c-4.418 0-8-3.582-8-8 0-3.313 2.69-6 6-6h4c3.31 0 6 2.687 6 6 0 4.418-3.582 8-8 8z" />
        </svg>
      </span>
      Handpicked destinations that showcase the best of Kerala's natural beauty and cultural heritage.
    </li>
    {/* Local Guides */}
    <li className="flex items-center">
      <span className="mr-4 text-green-500">
        {/* User Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804a2.98 2.98 0 01-.121-.804 9 9 0 0118 0c0 .268-.048.536-.121.804M12 2a6 6 0 100 12A6 6 0 0012 2z" />
        </svg>
      </span>
      Experienced local guides who ensure authentic and immersive experiences.
    </li>
    {/* Flexible Packages */}
    <li className="flex items-center">
      <span className="mr-4 text-green-500">
        {/* Calendar Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V5a1 1 0 012 0v2M16 7V5a1 1 0 112 0v2M5 10h14M5 16h14M3 10h2v11a2 2 0 002 2h10a2 2 0 002-2V10h2M5 7h14a2 2 0 012 2v9M5 16h14m-8-6v3m0 0v3m0-3h3m-3 0H9" />
        </svg>
      </span>
      Flexible packages tailored to suit families, couples, and solo travelers.
    </li>
    {/* Sustainability */}
    <li className="flex items-center">
      <span className="mr-4 text-green-500">
        {/* Leaf Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 12l2 2 4-4m0 0a9 9 0 11-8 4.39M19 5a9 9 0 00-8 8m0 0H7m0 0a9 9 0 01-6 6" />
        </svg>
      </span>
      Commitment to sustainable tourism and environmental conservation.
    </li>
  </ul>
</div>
  </div>
</section>


<div className="bg-slate-800 py-10 sm:py-16 text-center text-white">
  <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
    Start Your Adventure Today!
  </h2>
  <p className="text-base sm:text-lg md:text-xl mb-6">
    Explore our exciting tour packages and find the perfect getaway for you.
  </p>
  <a
    href="/enquiry"
    className="inline-block px-8 py-4 bg-white text-black rounded-lg shadow-lg hover:bg-gray-700 hover:text-white transition-colors duration-300"
  >
    Book Now
  </a>
</div>

        

      {/* Footer Section */}
      <footer className="bg-slate-900 text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* About Section */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Royal Odyssey</h3>
              <p className="text-sm">
                Discover unforgettable travel experiences with expertly curated packages to Kerala's most stunning destinations.
              </p>
            </div>

            {/* Quick Links Section */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="hover:underline">About Us</a>
                </li>
                <li>
                  <a href="#activities" className="hover:underline">Activities</a>
                </li>
                <li>
                  <a href="/enquiry" className="hover:underline">Enquiry</a>
                </li>
                <li>
                  <a href="/contact" className="hover:underline">Contact</a>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
              <p className="text-sm">Email: tss288745@gmail.com</p>
              <p className="text-sm">Phone: +917907851594 </p>
              <p className="text-sm">Address: Kerala, India</p>
            </div>

            {/* Social Media Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/share/17LzjA3XeF/"
                  className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-gray-700 transition"
                >
                  <img src="/icons/facebook.svg" alt="Facebook" className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/917907851594"
                  className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-gray-700 transition"
                >
                  <img src="/icons/whatsapp.svg" alt="Twitter" className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/royal.odyssey/"
                  className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-gray-700 transition"
                >
                  <img src="/icons/instagram.svg" alt="Instagram" className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Footer Bottom Section */}
          <div className="mt-8 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Royal Odyssey. All rights reserved.</p>
          </div>
        </div>
      </footer>
      </main>
    </div>
  );
}
