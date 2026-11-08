
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <nav className="w-full bg-white border-b border-gray-100">

      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-bold tracking-tight text-gray-900">
          SARii<span className="text-indigo-600">.</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">

          <Link to="/" className="text-sm font-medium text-gray-900">
            Home
          </Link>

          <Link to="/about" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition">
            About
          </Link>

          <Link to="/services" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition">
            Services
          </Link>

          <Link to="/projects" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition">
            Projects
          </Link>

          <Link to="/contact" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition">
            Contact
          </Link>

        </div>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-4">

          <a
            href="#"
            className="hidden sm:inline-block text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            Sign In
          </a>

          <a
            href="#"
            className="hidden sm:inline-block bg-gray-900 text-white text-sm font-medium px-5 py-3 rounded-lg hover:bg-gray-700 transition"
          >
            Get Started
          </a>

          {/* Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-900 p-2"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              // Close Icon
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger Icon
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

        </div>

      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-5">

          <div className="flex flex-col gap-5">

            <Link to="/" onClick={closeMenu} className="text-sm font-medium text-gray-900">
              Home
            </Link>

            <Link to="/about" onClick={closeMenu} className="text-sm font-medium text-gray-500">
              About
            </Link>

            <Link to="/services" onClick={closeMenu} className="text-sm font-medium text-gray-500">
              Services
            </Link>

            <Link to="/projects" onClick={closeMenu} className="text-sm font-medium text-gray-500">
              Projects
            </Link>

            <Link to="/contact" onClick={closeMenu} className="text-sm font-medium text-gray-500">
              Contact
            </Link>

            <hr className="border-gray-100" />

            <a href="#" className="text-sm font-medium text-gray-700">
              Sign In
            </a>

            <a
              href="#"
              className="bg-gray-900 text-white text-sm font-medium px-5 py-3 rounded-lg text-center"
            >
              Get Started
            </a>

          </div>

        </div>
      )}

    </nav>
  )
}

export default Navbar
