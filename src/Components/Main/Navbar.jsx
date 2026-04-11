import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom"; // Use NavLink for active states

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Shared class for standard menu items
  const navLinkClass = ({ isActive }) => 
    `px-5 py-2.5 rounded-lg transition-all duration-300 hover:text-white ${
      isActive 
        ? 'bg-[#1A1A1A] text-white' // Dark background for focused/active link
        : 'text-[#BFBFBF]'
    }`;

  // Special class for the Sign In / Logout button
  const authButtonClass = ({ isActive }) => 
    `px-6 py-2.5 rounded-lg font-medium transition-all duration-300 ${
      isActive 
        ? 'bg-[#E50914] text-white' // Red background when on the Sign In page
        : 'text-[#BFBFBF] hover:text-white'
    }`;

  return (
    <nav 
      className={`fixed top-0 left-0 w-full  h-[90px] z-[200] flex items-center justify-between px-[80px] text-white transition-all duration-300
        ${scrolled 
          ? 'bg-[#141414]/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
        }`} 
    >
      {/* Logo */}
      <div className="nav_logo">
        <img src="./public/Logo.png" alt="StreamVibe Logo" className="h-10" />
      </div>

      {/* Menu Container */}
      <ul className='flex h-[70px] bg-[#0F0F0F] px-2 py-2 gap-1 rounded-[12px] border border-[#1F1F1F] items-center'>
        <li>
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/moviesandshows" className={navLinkClass}>
            Movies & Shows
          </NavLink>
        </li>
        <li>
          <NavLink to="/support" className={navLinkClass}>
            Support
          </NavLink>
        </li>
        <li>
          <NavLink to="/subs" className={navLinkClass}>
            Subscriptions
          </NavLink>
        </li>
        {/* The Red "Sign In" Button */}
        <li>
          <NavLink to="/signin" className={authButtonClass}>
            Sign In
          </NavLink>
        </li>
      </ul>

      {/* Icons */}
      <div className="icons flex items-center gap-[20px]">
        <NavLink to="/search" className="text-[#BFBFBF] hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </NavLink>

        <button className="text-[#BFBFBF] hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;