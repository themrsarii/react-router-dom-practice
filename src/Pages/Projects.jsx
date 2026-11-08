
import React from 'react'

export const Projects = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-14">
          <div>
            <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">
              Our Portfolio
            </span>

            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4">
              Recent Projects
            </h2>

            <p className="text-gray-500 mt-4 max-w-xl leading-7">
              Take a look at some of our recent work and explore
              the ideas we've transformed into reality.
            </p>
          </div>

          <a
            href="#"
            className="text-indigo-600 font-semibold hover:text-indigo-800 transition"
          >
            View All Projects →
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Project 1 */}
          <div className="group border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition">
            <div className="h-56 bg-gray-100 flex items-center justify-center">
              <span className="text-5xl font-bold text-gray-300">01</span>
            </div>

            <div className="p-7">
              <div className="flex gap-2 flex-wrap mb-4">
                <span className="bg-indigo-50 text-indigo-600 text-xs px-3 py-1.5 rounded-full">React</span>
                <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1.5 rounded-full">Tailwind CSS</span>
              </div>

              <h3 className="text-xl font-semibold text-gray-900">
                E-Commerce Website
              </h3>

              <p className="text-gray-500 text-sm leading-7 mt-3">
                A modern online shopping platform with a clean interface
                and seamless shopping experience.
              </p>

              <a href="#" className="inline-block mt-5 text-sm font-semibold text-gray-900 group-hover:text-indigo-600 transition">
                View Project →
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="group border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition">
            <div className="h-56 bg-gray-100 flex items-center justify-center">
              <span className="text-5xl font-bold text-gray-300">02</span>
            </div>

            <div className="p-7">
              <div className="flex gap-2 flex-wrap mb-4">
                <span className="bg-green-50 text-green-600 text-xs px-3 py-1.5 rounded-full">Node.js</span>
                <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1.5 rounded-full">MongoDB</span>
              </div>

              <h3 className="text-xl font-semibold text-gray-900">
                Task Management App
              </h3>

              <p className="text-gray-500 text-sm leading-7 mt-3">
                A productivity application designed to organize tasks,
                manage projects, and track progress.
              </p>

              <a href="#" className="inline-block mt-5 text-sm font-semibold text-gray-900 group-hover:text-indigo-600 transition">
                View Project →
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="group border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition">
            <div className="h-56 bg-gray-100 flex items-center justify-center">
              <span className="text-5xl font-bold text-gray-300">03</span>
            </div>

            <div className="p-7">
              <div className="flex gap-2 flex-wrap mb-4">
                <span className="bg-orange-50 text-orange-600 text-xs px-3 py-1.5 rounded-full">JavaScript</span>
                <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1.5 rounded-full">API</span>
              </div>

              <h3 className="text-xl font-semibold text-gray-900">
                Weather Application
              </h3>

              <p className="text-gray-500 text-sm leading-7 mt-3">
                A responsive weather application displaying real-time
                weather information through an external API.
              </p>

              <a href="#" className="inline-block mt-5 text-sm font-semibold text-gray-900 group-hover:text-indigo-600 transition">
                View Project →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

