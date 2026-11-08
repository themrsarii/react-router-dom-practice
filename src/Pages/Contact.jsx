
import React from 'react'

 export const Contact = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">
            Contact Us
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4">
            Let's Work Together
          </h2>

          <p className="text-gray-500 mt-5 leading-7">
            Have a project in mind or just want to say hello?
            We'd love to hear from you.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Information */}
          <div className="bg-gray-900 rounded-2xl p-8 md:p-12 text-white">

            <h3 className="text-2xl font-semibold">
              Get in Touch
            </h3>

            <p className="text-gray-400 mt-4 leading-7">
              Feel free to reach out. We're always open to discussing
              new projects, creative ideas, and opportunities.
            </p>

            <div className="mt-12 space-y-8">

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center text-indigo-400 text-xl">
                  ✉
                </div>
                <div>
                  <h4 className="font-medium">Email Address</h4>
                  <p className="text-gray-400 text-sm mt-2">
                    hello@example.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center text-indigo-400 text-xl">
                  ☎
                </div>
                <div>
                  <h4 className="font-medium">Phone Number</h4>
                  <p className="text-gray-400 text-sm mt-2">
                    +92 300 1234567
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center text-indigo-400 text-xl">
                  ◉
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-gray-400 text-sm mt-2">
                    Islamabad, Pakistan
                  </p>
                </div>
              </div>

            </div>

            {/* Social Links */}
            <div className="mt-14">
              <h4 className="font-medium mb-5">Follow Us</h4>

              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-sm hover:bg-indigo-600 transition">in</a>
                <a href="#" className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-sm hover:bg-indigo-600 transition">X</a>
                <a href="#" className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-sm hover:bg-indigo-600 transition">IG</a>
                <a href="#" className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-sm hover:bg-indigo-600 transition">GH</a>
              </div>
            </div>

          </div>

          {/* Contact Form Design */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12">

            <h3 className="text-2xl font-semibold text-gray-900">
              Send Us a Message
            </h3>

            <p className="text-gray-500 text-sm mt-3 mb-8">
              Fill out the form below and we'll get back to you.
            </p>

            <form className="space-y-6">

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none focus:border-indigo-500 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none focus:border-indigo-500 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Enter subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none focus:border-indigo-500 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none focus:border-indigo-500 transition resize-none"
                ></textarea>
              </div>

              <button
                type="button"
                className="w-full bg-gray-900 text-white py-3.5 rounded-lg font-medium hover:bg-gray-700 transition"
              >
                Send Message →
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  )
}

