import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

const RedirectHandler = () => {
  const { shortCode } = useParams();
  const [originalUrl, setOriginalUrl] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOriginalUrl = async () => {
      try {
        console.log(`Fetching redirect for short code: ${shortCode}`);
        
        // Try to get the original URL from the API
        const result = await api.getUrlByShortCode(shortCode);
        
        if (result && result.originalUrl) {
          console.log(`Redirecting to: ${result.originalUrl}`);
          setOriginalUrl(result.originalUrl);
        } else {
          throw new Error('Could not find original URL');
        }
      } catch (err) {
        console.error('Error fetching original URL:', err);
        setError('The shortened URL you are trying to access does not exist or has expired.');
      } finally {
        setLoading(false);
      }
    };

    if (shortCode) {
      fetchOriginalUrl();
    }
  }, [shortCode]);

  // If we have the original URL, redirect to it
  useEffect(() => {
    if (originalUrl) {
      window.location.href = originalUrl;
    }
  }, [originalUrl]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-900">
        <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full">
          <div className="animate-spin mx-auto w-16 h-16 border-4 border-gray-300 dark:border-gray-600 border-t-black dark:border-t-white rounded-full mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Redirecting you...</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Please wait while we take you to your destination.</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-900">
        <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full">
          <div className="mx-auto w-16 h-16 flex items-center justify-center bg-red-100 dark:bg-red-900/20 rounded-full mb-4">
            <svg className="w-8 h-8 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Link Not Found</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">{error}</p>
          <a 
            href="/" 
            className="mt-6 inline-block px-6 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
          >
            Go to Homepage
          </a>
        </div>
      </div>
    );
  }

  // Show a loading state while redirect happens
  return (
    <div className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-900">
      <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full">
        <div className="animate-spin mx-auto w-16 h-16 border-4 border-gray-300 dark:border-gray-600 border-t-black dark:border-t-white rounded-full mb-4"></div>
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Redirecting you...</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          {originalUrl && (
            <>If you are not redirected automatically, click <a href={originalUrl} className="text-blue-600 dark:text-blue-400 hover:underline">here</a>.</>
          )}
        </p>
      </div>
    </div>
  );
};

export default RedirectHandler;