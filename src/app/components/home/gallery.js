"use client"; // Make sure to add this to use hooks like useState
import { useState } from "react";
import { packageData } from "../../data/packages"; // Ensure correct path
import Card from "./card"; // Ensure correct path and casing
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import Image from "next/image"; // Import Image component
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function PanoramaSlider() {
  // State to handle the modal
  const [selectedCard, setSelectedCard] = useState(null);

  // Function to handle card click
  const handleCardClick = (card) => {
    setSelectedCard(card); // Set the clicked card as the selected one
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedCard(null); // Close modal
  };

  return (
    <div className="relative">
      {/* Swiper Carousel */}
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2} // Default for mobile
        spaceBetween={5} // Adds space between slides
        initialSlide={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 3, // For tablets
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3, // For small desktops
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 4, // For larger screens
            spaceBetween: 40,
          },
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        {/* Map through package data */}
        {packageData.map((card, index) => (
          <SwiperSlide key={index}>
            <div onClick={() => handleCardClick(card)} className="cursor-pointer">
              <Card
                image={card.imageUrl}
                title={card.title}
                description={card.description}
                info={card.info}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )   
    }

      