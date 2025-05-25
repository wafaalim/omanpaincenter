'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo + Texte */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Oman Pain Center Logo" width={64} height={64} />
          <div>
			<h1 className="text-logoBlue font-bold text-xl">OMAN PAIN CENTER</h1>
            <p className="text-logoBlue text-sm italic">A life without pain</p>
          </div>
        </Link>

        {/* Menu */}
        <nav className="space-x-6 hidden md:flex">
          <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600">About Us</Link>
          <Link href="/services" className="text-gray-700 hover:text-blue-600">Services</Link>
          <Link href="/equipe" className="text-gray-700 hover:text-blue-600">Team</Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
        </nav>

        {/* Actions: Book Now + Phone + Language */}
        <div className="flex items-center space-x-4">
          <Link href="/appointment">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Book Now
            </button>
          </Link>

          {/* Phone */}
          <div className="flex items-center space-x-2 text-[#0077B5]">
		    <svg xmlns="http://www.w3.org/2000/svg" fill="#0077B5" viewBox="0 0 24 24" width="24" height="24">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.08 4.18 2 2 0 0 1 5 2h3a2 2 0 0 1 2 1.72c.12.81.31 1.6.57 2.36a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.6 6.6l1.27-1.27a2 2 0 0 1 2.11-.45c.76.26 1.55.45 2.36.57a2 2 0 0 1 1.72 2z"/>
            </svg>
            <span className="text-sm font-medium">800 444 444</span>
          </div>

          {/* Language Dropdown */}
          <select className="border border-gray-300 rounded px-2 py-1 text-sm text-gray-700">
            <option value="en">EN</option>
            <option value="ar">AR</option>
          </select>
        </div>

      </div>
    </header>
  );
}
