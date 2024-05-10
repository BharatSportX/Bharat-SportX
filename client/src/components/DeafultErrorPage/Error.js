import React from 'react';
import './Error.css'; 
import Footer from '../FrontPage/Footer';

export default function Error() {
  return (
    <React.Fragment>
      <div className="error-container bg-gray-100 min-h-screen flex justify-center items-center">
        <div className="error-content text-center">
          <img
            className="error-img mx-auto animate-bounce"
            src="https://img.icons8.com/emoji/96/cross-mark-emoji.png"
            alt="Cross Mark Emoji"
          />
          <p className="error-message text-2xl md:text-3xl lg:text-4xl text-black-600 mt-6 animate-fade-in-up">
            Oops! Something went wrong. <br /> 404 Not Found.
          </p>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
