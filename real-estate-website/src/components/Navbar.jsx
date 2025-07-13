'use client';
import Link from "next/link";
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full px-6 py-4 bg-white shadow-sm">
      <div className="flex items-center justify-between">
        
        <div className="text-2xl font-extrabold text-black font-serif">
          Dribbble
        </div>

        
        <div className="hidden lg:flex items-center w-[500px] bg-gray-100 rounded-full px-4 py-2">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="bg-transparent flex-1 px-2 outline-none text-sm text-gray-700"
          />
          <div className="text-sm text-gray-700 mr-2">Shots ▾</div>
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-pink-500">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

       
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-800">
          <li className="hover:text-black cursor-pointer">Explore ▾</li>
          <div className="relative group">
            <li className="hover:text-black cursor-pointer">Hire a Designer ▾</li>
            <ul className="absolute hidden group-hover:block bg-white shadow-md mt-2 py-2 rounded-md z-50 min-w-[180px]">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Post a Job</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Freelancer Search</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Agency Listing</li>
            </ul>
          </div>
          <li className="hover:text-black cursor-pointer">Find Jobs</li>
          <li className="hover:text-black cursor-pointer">Blog</li>
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/signup">
            <button className="text-sm font-semibold text-gray-800 hover:text-pink-600 transition">
              Sign up
            </button>
          </Link>
          <Link href="/login">
            <button className="bg-[#0d0c22] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-pink-600 transition">
              Log in
            </button>
          </Link>
        </div>

       
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2 text-sm font-medium text-gray-800">
          <div className="flex flex-col gap-2">
            <span className="hover:text-black cursor-pointer">Explore ▾</span>
            <span className="hover:text-black cursor-pointer">Hire a Designer ▾</span>
            <span className="hover:text-black cursor-pointer">Find Jobs</span>
            <span className="hover:text-black cursor-pointer">Blog</span>
            <Link href="/signup">
              <button className="text-left text-sm text-gray-800 hover:text-pink-600 transition">
                Sign up
              </button>
            </Link>
            <Link href="/login">
              <button className="bg-[#0d0c22] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-pink-600 transition w-full text-left">
                Log in
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
