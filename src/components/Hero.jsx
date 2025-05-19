import React from 'react';

const Hero = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Shorten Your URLs, <span className="text-primary-500">Expand Your Reach</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Transform long, unwieldy links into clean, memorable, and trackable short URLs in just seconds.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#url-shortener" className="btn-primary text-center">
                Get Started
              </a>
              <a href="#features" className="btn-secondary text-center">
                Learn More
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary-100 rounded-full opacity-70"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-secondary-100 rounded-full opacity-70"></div>
              <div className="relative bg-white rounded-xl shadow-custom p-6 border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="ml-4 flex-1 h-6 bg-gray-100 rounded"></div>
                </div>
                <div className="space-y-3">
                  <div className="h-8 bg-gray-100 rounded w-full"></div>
                  <div className="h-8 bg-primary-100 rounded w-2/3"></div>
                  <div className="h-20 bg-gray-50 rounded w-full border border-gray-200"></div>
                </div>
                <div className="mt-4 flex justify-end">
                  <div className="h-10 bg-primary-500 rounded w-1/3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
