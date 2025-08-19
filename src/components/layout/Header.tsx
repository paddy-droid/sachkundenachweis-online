"use client";
import Link from 'next/link';
import { useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useDetectOutsideClick } from './useDetectOutsideClick';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isNoMenuOpen, setIsNoMenuOpen] = useDetectOutsideClick(dropdownRef, false);
  const [isMobileNoMenuOpen, setIsMobileNoMenuOpen] = useState(false);

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
          <div className="relative" ref={dropdownRef}>
            <button onClick={() => setIsNoMenuOpen(!isNoMenuOpen)} className="text-gray-700 hover:text-[--highlight] transition duration-300 flex items-center">
              NÖ
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            {isNoMenuOpen && (
              <div className="absolute bg-white shadow-lg rounded-md mt-2 py-2 w-48">
                <Link href="/niederoesterreich" onClick={() => setIsNoMenuOpen(false)} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">NÖ Übersicht</Link>
                <Link href="/st-poelten" onClick={() => setIsNoMenuOpen(false)} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">St. Pölten</Link>
                <Link href="/tulln" onClick={() => setIsNoMenuOpen(false)} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Tulln</Link>
                <Link href="/baden" onClick={() => setIsNoMenuOpen(false)} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Baden</Link>
                <Link href="/wiener-neustadt" onClick={() => setIsNoMenuOpen(false)} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Wiener Neustadt</Link>
                <Link href="/moedling" onClick={() => setIsNoMenuOpen(false)} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Mödling</Link>
              </div>
            )}
          </div>
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
          <div className="text-center py-2">
            <button onClick={() => setIsMobileNoMenuOpen(!isMobileNoMenuOpen)} className="text-gray-700 hover:bg-gray-100 w-full text-center">NÖ</button>
            {isMobileNoMenuOpen && (
              <div className="pl-4">
                <Link href="/niederoesterreich" onClick={() => setIsMenuOpen(false)} className="block text-left py-2 text-gray-600 text-sm hover:bg-gray-100">NÖ Übersicht</Link>
                <Link href="/niederoesterreich/st-poelten" onClick={() => setIsMenuOpen(false)} className="block text-left py-2 text-gray-600 text-sm hover:bg-gray-100">St. Pölten</Link>
                <Link href="/niederoesterreich/tulln" onClick={() => setIsMenuOpen(false)} className="block text-left py-2 text-gray-600 text-sm hover:bg-gray-100">Tulln</Link>
                <Link href="/niederoesterreich/baden" onClick={() => setIsMenuOpen(false)} className="block text-left py-2 text-gray-600 text-sm hover:bg-gray-100">Baden</Link>
                <Link href="/niederoesterreich/wiener-neustadt" onClick={() => setIsMenuOpen(false)} className="block text-left py-2 text-gray-600 text-sm hover:bg-gray-100">Wiener Neustadt</Link>
                <Link href="/niederoesterreich/moedling" onClick={() => setIsMenuOpen(false)} className="block text-left py-2 text-gray-600 text-sm hover:bg-gray-100">Mödling</Link>
              </div>
            )}
          </div>
          <Link href="/salzburg" onClick={() => setIsMenuOpen(false)} className="block text-center py-2 text-gray-700 hover:bg-gray-100">Salzburg</Link>
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