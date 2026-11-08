
import React from 'react'

export const Services = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4">
            What We Can Do For You
          </h2>

          <p className="text-gray-500 mt-5 leading-7">
            We provide creative and reliable solutions to help you
            build, grow, and succeed in the digital world.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

          {/* Service 1 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition">
            <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center text-2xl">
              ✦
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-7">
              Web Development
            </h3>

            <p className="text-gray-500 leading-7 mt-3">
              Build modern, responsive, and high-performance websites
              that deliver excellent user experiences.
            </p>

            <a href="#" className="inline-block mt-6 text-indigo-600 font-medium text-sm">
              Learn More →
            </a>
          </div>

          {/* Service 2 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition">
            <div className="w-14 h-14 bg-green-50 text-green-600 rounded-xl flex items-center justify-center text-2xl">
              ◈
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-7">
              UI/UX Design
            </h3>

            <p className="text-gray-500 leading-7 mt-3">
              Create beautiful and user-friendly interfaces with
              thoughtful layouts and intuitive experiences.
            </p>

            <a href="#" className="inline-block mt-6 text-indigo-600 font-medium text-sm">
              Learn More →
            </a>
          </div>

          {/* Service 3 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition">
            <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center text-2xl">
              ⌘
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-7">
              Frontend Development
            </h3>

            <p className="text-gray-500 leading-7 mt-3">
              Develop interactive and responsive frontend applications
              using modern web technologies.
            </p>

            <a href="#" className="inline-block mt-6 text-indigo-600 font-medium text-sm">
              Learn More →
            </a>
          </div>

          {/* Service 4 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition">
            <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center text-2xl">
              ◉
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-7">
              Backend Development
            </h3>

            <p className="text-gray-500 leading-7 mt-3">
              Create secure APIs, manage databases, and build
              reliable server-side applications.
            </p>

            <a href="#" className="inline-block mt-6 text-indigo-600 font-medium text-sm">
              Learn More →
            </a>
          </div>

          {/* Service 5 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition">
            <div className="w-14 h-14 bg-pink-50 text-pink-600 rounded-xl flex items-center justify-center text-2xl">
              ◎
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-7">
              Responsive Design
            </h3>

            <p className="text-gray-500 leading-7 mt-3">
              Ensure your website looks and works perfectly across
              mobile, tablet, and desktop devices.
            </p>

            <a href="#" className="inline-block mt-6 text-indigo-600 font-medium text-sm">
              Learn More →
            </a>
          </div>

          {/* Service 6 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition">
            <div className="w-14 h-14 bg-yellow-50 text-yellow-600 rounded-xl flex items-center justify-center text-2xl">
              ↗
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-7">
              Website Optimization
            </h3>

            <p className="text-gray-500 leading-7 mt-3">
              Improve website speed, performance, accessibility,
              and overall user experience.
            </p>

            <a href="#" className="inline-block mt-6 text-indigo-600 font-medium text-sm">
              Learn More →
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}


