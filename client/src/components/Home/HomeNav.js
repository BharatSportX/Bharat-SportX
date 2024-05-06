import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeNav({ location }) {
  return (
    <div>
      <nav className="bg-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="block lg:hidden h-8 w-auto"
                  src="/logo.svg"
                  alt="Logo"
                />
                <img
                  className="hidden lg:block h-8 w-auto"
                  src="/logo.svg"
                  alt="Logo"
                />
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                
                  <Link
                    to="/all"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    All
                  </Link>
                  <Link
                    to="/live"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Live
                  </Link>
                  <Link
                    to="/finished"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Finished
                  </Link>
                  <Link
                    to="/scheduled"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Scheduled
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
