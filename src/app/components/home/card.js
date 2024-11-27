import Image from 'next/image';

export default function Card({ image, title, description, info }) {
  return (
    <div className="max-w- mx-auto bg-white shadow-lg rounded-lg overflow-hidden sm:max-w-sm md:max-w-md lg:max-w-lg">
      {/* Image Section */}
      <div className="relative h-64 sm:h-80">
        <Image
          src={image || "/images/card1.jpg"}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="w-full h-full object-cover"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black opacity-90"></div>
        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h2 className="text-lg sm:text-xl font-bold">{title}</h2>
          <p className="mt-1 text-sm sm:text-base">{description}</p>
          <p className="mt-2 text-xs sm:text-sm text-gray-300">{info}</p>
        </div>
      </div>
    </div>
  );
}
