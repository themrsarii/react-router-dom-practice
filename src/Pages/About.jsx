
import React from 'react'

export const About = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>
            <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>

            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4 leading-tight">
              We Make Ideas
              <span className="text-indigo-600"> Come to Life.</span>
            </h2>

            <p className="text-gray-500 mt-6 leading-8">
              We believe great things start with great ideas. Our goal is
              to create meaningful experiences through creativity,
              innovation, and modern technology.
            </p>

            <p className="text-gray-500 mt-4 leading-8">
              We focus on delivering simple, reliable, and effective
              solutions that help people and businesses achieve more.
            </p>

            <a
              href="#"
              className="inline-block mt-8 bg-gray-900 text-white px-7 py-3 rounded-lg font-medium hover:bg-gray-700 transition"
            >
              Learn More
            </a>
          </div>

          {/* Right Content */}
          <div className="relative">

            <div className="bg-gray-100 rounded-2xl p-10 md:p-14">

              <div className="grid grid-cols-2 gap-8">

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-4xl font-bold text-gray-900">5+</h3>
                  <p className="text-gray-500 text-sm mt-2">
                    Years Experience
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-4xl font-bold text-indigo-600">50+</h3>
                  <p className="text-gray-500 text-sm mt-2">
                    Projects Completed
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-4xl font-bold text-gray-900">30+</h3>
                  <p className="text-gray-500 text-sm mt-2">
                    Happy Clients
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-4xl font-bold text-indigo-600">24/7</h3>
                  <p className="text-gray-500 text-sm mt-2">
                    Support
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
