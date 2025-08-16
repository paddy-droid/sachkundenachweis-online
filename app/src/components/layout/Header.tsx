"use client";
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const ctaLink = pathname === '/salzburg'
    ? 'https://www.willenskraft.co.at/produkt/sachkundenachweis-salzburg/'
    : 'https://www.willenskraft.co.at/produkt/sachkundenachweis-niederoesterreich/';

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50 transition-all duration-300">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-900">
          Sachkundenachweis Online
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-gray-700 hover:text-[--highlight] font-semibold transition duration-300">Startseite</Link>
          <Link href="/niederoesterreich" className="text-gray-700 hover:text-[--highlight] transition duration-300">NÖ</Link>
          <Link href="/salzburg" className="text-gray-700 hover:text-[--highlight] transition duration-300">Salzburg</Link>
          <a href={ctaLink} target="_blank" rel="noopener noreferrer" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-5 rounded-full shadow-md hover:shadow-lg transition-all transform hover:scale-105">
            Jetzt Kursplatz sichern
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4">
          <Link href="/" className="block text-center py-2 text-gray-700 hover:bg-gray-100">Startseite</Link>
          <Link href="/niederoesterreich" className="block text-center py-2 text-gray-700 hover:bg-gray-100">NÖ</Link>
          <Link href="/salzburg" className="block text-center py-2 text-gray-700 hover:bg-gray-100">Salzburg</Link>
          <div className="text-center mt-4">
            <a href={ctaLink} target="_blank" rel="noopener noreferrer" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-5 rounded-full shadow-md">
              Jetzt Kursplatz sichern
            </a>
          </div>
        </div>
      )}
    </header>
  );
};