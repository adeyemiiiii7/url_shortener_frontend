import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import UrlShortenerForm from './components/UrlShortenerForm';
import RedirectHandler from './components/RedirectHandler';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col w-full bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        
        <Routes>
          <Route path="/" element={
            <main className="flex-grow flex items-center justify-center w-full py-12 px-4 sm:px-6 lg:px-8">
              <div className="w-full max-w-2xl mx-auto">
                <div className="text-center mb-10">
                  <h1 className="text-5xl font-bold text-black dark:text-white mb-6 tracking-tight">LinkSnip</h1>
                  <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
                    Paste your long URL below and get a short, shareable link instantly.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-8 border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl">
                  <UrlShortenerForm />
                </div>
              </div>
            </main>
          } />
          <Route path="/:shortCode" element={<RedirectHandler />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;