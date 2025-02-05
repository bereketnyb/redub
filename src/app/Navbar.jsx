'use client';

import React, { useState } from 'react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-gray-800 p-4 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Photo Gallery</h1>

                {/* Mobile Menu Button (Hamburger Icon) */}
                <button className="md:hidden text-white focus:outline-none" onClick={toggleMobileMenu}>
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                    </svg>
                </button>

                {/* Navigation Links */}
                <ul
                    className={`md:flex md:space-x-4 md:items-center ${
                        isMobileMenuOpen ? 'flex flex-col absolute top-full left-0 w-full bg-gray-800 z-10' : 'hidden'
                    }`}
                >
                    <li>
                        <a href="/" className="block md:inline-block p-2 hover:text-gray-300">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/about" className="block md:inline-block p-2 hover:text-gray-300">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="/contact" className="block md:inline-block p-2 hover:text-gray-300">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;