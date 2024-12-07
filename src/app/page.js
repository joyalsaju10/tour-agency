
import Head from 'next/head';
import Image from 'next/image';
import Navbar from './components/navBar';
import PanoramaSlider from './components/home/gallery';

export default function Home() {
  return (
    <div className="bg-slate-800">
      
      <main className="min-h-screen">
        {/* Background Image Section */}
        <div
          className="relative bg-cover bg-center bg-no-repeat home-background"
          style={{
            backgroundImage: `url('/images/bg-main.jpg')`,
            height: "500px",
          }}
        >
          <div className="absolute inset-0 bg-slate-800 bg-opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center font-extrabold text-white">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-cyan-500">
                Go Live, Explore 
              </span>
            </h1>
          </div>
          <Navbar />
        </div>

        {/* Content Section */}
        <div className="pt-12 pb-10">
          <PanoramaSlider />
        </div>

        {/* Call to Action Section */}
        <div className="bg-slate-800 py-12 sm:py-16 text-center text-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
            Start Your Adventure Today!
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6">
            Explore our exciting tour packages and find the perfect getaway for you.
          </p>
          <a
            href="/enquiry"
            className="inline-block px-6 py-3 bg-white text-black rounded-lg shadow-lg hover:bg-gray-700 hover:text-white transition-colors duration-300"
          >
            Book Now
          </a>
        </div>
      </main>
    </div>
  );
}
