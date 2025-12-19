import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-12 py-20 mb-12 flex flex-col justify-center items-center px-6"
    >
      <div className="flex flex-col justify-center items-center mb-16">
        <div className="mb-6 rounded-full px-4 py-1 bg-yellow-100 text-yellow-600 w-fit text-sm font-medium uppercase tracking-wider">
          Get in touch
        </div>
        <h1 className="max-w-xs md:max-w-2xl text-center text-3xl md:text-5xl font-bold mb-6">
          Let's Start a <span className="text-yellow-500">Conversation</span>
        </h1>
        <p className="text-lg text-gray-500 max-w-xs md:max-w-2xl text-center">
          Ready to transform your business? We'd love to hear from you. Reach
          out and let's explore the possibilities together.
        </p>
      </div>

      <div className="flex flex-col md:flex-row max-w-7xl w-full justify-between gap-12">
        {/* Left Section - Contact Information */}
        <div className="flex-1">
          <h2 className="font-bold text-2xl mb-6">Contact Information</h2>

          {/* Email Card */}
          <div className="rounded-2xl shadow-lg w-full p-5 flex gap-4 bg-white mb-4">
            <div className="px-4 py-3 flex items-center justify-center bg-yellow-50 text-yellow-500 rounded-xl">
              <Mail size={24} />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-gray-500 text-sm mb-1">Email</h3>
              <p className="text-gray-900 font-medium">
                hello@apexconsulting.com
              </p>
            </div>
          </div>

          {/* Phone Card */}
          <div className="rounded-2xl shadow-lg w-full p-5 flex gap-4 bg-white mb-4">
            <div className="px-4 py-3 flex items-center justify-center bg-yellow-50 text-yellow-500 rounded-xl">
              <Phone size={24} />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-gray-500 text-sm mb-1">Phone</h3>
              <p className="text-gray-900 font-medium">+1 (555) 123-4567</p>
            </div>
          </div>

          {/* Location Card */}
          <div className="rounded-2xl shadow-lg w-full p-5 flex gap-4 bg-white mb-8">
            <div className="px-4 py-3 flex items-center justify-center bg-yellow-50 text-yellow-500 rounded-xl">
              <MapPin size={24} />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-gray-500 text-sm mb-1">Location</h3>
              <p className="text-gray-900 font-medium">
                123 Business Ave, New York, NY 10001
              </p>
            </div>
          </div>

          {/* Office Hours */}
          <div className="bg-gray-900 text-white rounded-2xl p-6">
            <h3 className="font-bold text-xl mb-4">Office Hours</h3>
            <p className="text-gray-300 mb-2">
              Monday - Friday: 9:00 AM - 6:00 PM EST
            </p>
            <p className="text-gray-300">Saturday - Sunday: Closed</p>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="flex-1">
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
            <h2 className="font-bold text-2xl mb-6">Send us a Message</h2>

            <div className="flex gap-4 mb-4">
              <div className="flex flex-col flex-1">
                <label
                  htmlFor="fullname"
                  className="text-gray-700 font-medium mb-2"
                >
                  Full Name
                </label>
                <input
                  id="fullname"
                  className="border border-gray-300 bg-white rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="John Smith"
                  type="text"
                />
              </div>
              <div className="flex flex-col flex-1">
                <label
                  htmlFor="email"
                  className="text-gray-700 font-medium mb-2"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  className="border border-gray-300 bg-white rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="john@company.com"
                  type="email"
                />
              </div>
            </div>

            <div className="flex flex-col mb-4">
              <label
                htmlFor="company"
                className="text-gray-700 font-medium mb-2"
              >
                Company
              </label>
              <input
                id="company"
                className="border border-gray-300 bg-white rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Your Company Name"
                type="text"
              />
            </div>

            <div className="flex flex-col mb-6">
              <label
                htmlFor="message"
                className="text-gray-700 font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                className="border border-gray-300 bg-white rounded-xl px-4 py-3 w-full h-32 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Tell us about your project or inquiry..."
              />
            </div>

            <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors">
              Send Message
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
