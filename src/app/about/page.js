import Navbar from "../components/navBar";


export default function About() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat relative text-white flex flex-col items-center py-12"
      style={{ backgroundImage: "url('/images/bg-3.jpg')" }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Navbar with Home button */}
      <Navbar />

      <div className="relative z-10 w-full max-w-4xl px-4 space-y-12 mt-20">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-00">
            About Us
          </h1>
        </div>

        {/* Intro Section */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Welcome to Our Travel Agency
          </h2>
          <p className="mt-4 text-sm md:text-base text-gray-300">
            Discover unforgettable travel experiences with us. We provide expertly curated tour packages to Kerala's most stunning destinations.
            Our mission is to make travel easy, accessible, and enriching for everyone. Whether you're looking for adventure, relaxation, or cultural immersion, we have the perfect package for you.
          </p>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-white bg-opacity-10 p-6 md:p-8 rounded-lg shadow-md">
          <h3 className="text-xl md:text-2xl font-semibold text-green-400 text-center">
            Why Choose Us?
          </h3>
          <ul className="mt-4 space-y-2 text-gray-300">
            <li>✔️ Expertly curated travel packages.</li>
            <li>✔️ Affordable and transparent pricing.</li>
            <li>✔️ Exceptional customer support.</li>
            <li>✔️ Personalized travel experiences.</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="text-center w-full py-12 mt-12">
          <h3 className="text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Get in Touch
          </h3>
          <p className="mt-4 text-sm md:text-base text-gray-300">
            We’re here to assist you. Whether you have questions, need support, or simply want to say hello, feel free to reach out to us. We’ll respond promptly!
          </p>
          <a
            href="/contact"
            className="mt-6 inline-block px-6 py-3 bg-green-600 text-white rounded-md font-medium shadow-md hover:bg-green-700"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
