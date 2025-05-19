import React from 'react';

const Header = () => {
  return (
    <header className="w-full py-5 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center mx-auto sm:mx-0">
          <div className="flex items-center bg-black dark:bg-white p-2 rounded-full mr-3">
            <svg 
              className="w-5 h-5 text-white dark:text-black" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
            </svg>
          </div>
          <h1 className="text-xl font-bold text-black dark:text-white tracking-tight">LinkSnip</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
