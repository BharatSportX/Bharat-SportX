import React, { useState, useEffect } from 'react';

export default function LaunchingSoon() {
  const [email, setEmail] = useState('');
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    let timeout;
    if (alert) {
      timeout = setTimeout(() => {
        setAlert(null);
      }, 3000);
    }
    return () => clearTimeout(timeout);
  }, [alert]);

  const handleNotifyMeClick = () => {
    if (email.trim() === '') {
      setAlert({ type: 'error', message: 'Please fill your email.' });
    } else {
      setAlert({ type: 'success', message: 'Notification sent!' });
      // Here you would typically send the email to your server
    }
  };

  return (
    <div>
      <section
        className="h-screen bg-cover"
        style={{ backgroundImage: "url('https://bharat-sport-x.vercel.app/static/media/frontBG1.12e1178850bde3df6b48.jpeg')" }}
      >
        <div className="flex h-full w-full items-center justify-center container mx-auto px-8">
          <div className="max-w-2xl text-center relative">
            <h1 className="text-3xl sm:text-5xl capitalize tracking-widest text-white lg:text-7xl">Coming Soon</h1>

            <p className="mt-6 lg:text-lg text-white">
              You can subscribe to our newsletter, and let you know when we are back
            </p>

            <div className="mt-8 flex flex-col space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0">
              <input
                id="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-md border border-transparent bg-white/20 px-4 py-2 text-white placeholder-white backdrop-blur-sm focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 sm:mx-2"
                placeholder="Email Address"
              />

              <button
                onClick={handleNotifyMeClick}
                className="transform rounded-md bg-blue-700 px-8 py-2 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-200 hover:bg-blue-600 focus:bg-blue-600 focus:outline-none sm:mx-2"
              >
                Notify Me
              </button>
            </div>

            {alert && (
            <div
            className={`absolute top--10 left-1/2 transform -translate-x-1/2 mt-4 px-4 py-2 rounded-md text-sm text-white whitespace-nowrap overflow-hidden ${
              alert.type === 'success' ? 'bg-gradient-to-r from-green-500 to-green-300' : 'bg-gradient-to-r from-red-500 to-red-300'
            }`}
            style={{ maxWidth: '80vw' }} 
          >
                {alert.type === 'success' ? (
                  <>
                    <span role="img" aria-label="Write sign" className="mr-2">
                      ✅
                    </span>
                    {alert.message}
                  </>
                ) : (
                  <>
                    
                    {alert.message}
                    <span role="img" aria-label="Cross sign" className="mr-2">
                      ❌
                    </span>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
