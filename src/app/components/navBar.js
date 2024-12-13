"use client"; // Add this line to specify that this is a client component

import { useState } from 'react';
import Link from 'next/link';


export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white absolute top-0 left-1/2 transform -translate-x-1/2 opacity-50 rounded-bl-lg rounded-br-lg">
      <div className="container mx-auto flex justify-center items-center">
        {/* Navbar Links */}
        <div className="flex space-x-4 md:space-x-10">
          <Link href="/" passHref>
            <span className="hover:text-gray-300 cursor-pointer">Home</span>
          </Link>
          <Link href="/enquiry" passHref>
            <span className="hover:text-gray-300 cursor-pointer">Enquiry</span>
          </Link>
          
          <Link href="/contact" passHref>
            <span className="hover:text-gray-300 cursor-pointer">Contact</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
