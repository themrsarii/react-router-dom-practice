
import React from 'react'

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 lg:py-32">

        <div className="max-w-3xl mx-auto text-center">

          <span className="inline-block bg-indigo-50 text-indigo-600 text-sm font-medium px-4 py-2 rounded-full mb-6">
            Welcome to SARii
          </span>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
            Build Something
            <span className="text-indigo-600"> Amazing </span>
            With Us.
          </h1>

          <p className="mt-6 text-gray-500 text-base md:text-lg leading-8 max-w-2xl mx-auto">
            Discover modern solutions designed to help you grow,
            improve productivity, and achieve your goals with confidence.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#"
              className="bg-gray-900 text-white px-7 py-3.5 rounded-lg font-medium hover:bg-gray-700 transition"
            >
              Get Started
            </a>

            <a
              href="#"
              className="bg-white text-gray-700 border border-gray-200 px-7 py-3.5 rounded-lg font-medium hover:bg-gray-100 transition"
            >
              Learn More
            </a>
          </div>

        </div>

      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Everything You Need
          </h2>
          <p className="text-gray-500 mt-3">
            Simple tools and powerful features to help you move forward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Feature 1 */}
          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 text-xl">
              ✦
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-6">
              Modern Design
            </h3>

            <p className="text-gray-500 mt-3 leading-7">
              Enjoy a clean and simple experience with a modern interface
              designed for everyone.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center text-green-600 text-xl">
              ✓
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-6">
              Easy to Use
            </h3>

            <p className="text-gray-500 mt-3 leading-7">
              Simple workflows make it easier to manage your tasks
              and get things done.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center text-orange-600 text-xl">
              ↗
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-6">
              Grow Faster
            </h3>

            <p className="text-gray-500 mt-3 leading-7">
              Get the tools and resources you need to improve
              your productivity and growth.
            </p>
          </div>

        </div>
      </section>

    </div>
  )
}

export default Home
