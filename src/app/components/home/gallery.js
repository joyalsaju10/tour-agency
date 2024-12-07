"use client";
import { useState } from "react";
import { packageData } from "../../data/packages";
import Card from "./card";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function PanoramaSlider() {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  return (
    <div className="relative">
      {/* Main Swiper Slider */}
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}  
        spaceBetween={5}  
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
            slidesPerView: 2, // Adjusted for tablet
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3, // Adjusted for larger screens
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 4, // Larger screens
            spaceBetween: 40,
          },
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
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

      {/* Modal Pop-up */}
      {selectedCard && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="backdrop-blur-md bg-slate-600 bg-opacity-20 p-8 sm:p-12 rounded-3xl max-w-4xl w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-black font-bold bg-white rounded-full w-8 h-8 flex items-center justify-center p-2 z-120"
            >
              X
            </button>

            {/* Swiper Slider inside the Modal */}
            <Swiper
              pagination={{ clickable: true }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="modalSwiper"
            >
              {selectedCard.additionalImages.map((image, index) => (
                <SwiperSlide key={index} className="absolute flex flex-col items-center">
                  <img
                    src={image.url}
                    alt={`Slide ${index + 1}`}
                    className="object-cover w-full h-96 sm:h-[400px] rounded-lg"
                  />

                  {/* Title/Description Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg">
                    <div className="absolute bottom-0 left-0 p-4 text-white w-full">
                      <h3 className="text-2xl font-bold">{image.title}</h3>
                      <p className="text-gray-200 mt-2">{image.description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </div>
  );
}
