import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Cup.css';

function Cups() {
  const [cups, setCups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSpeakNow, setShowSpeakNow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api-football-v1.p.rapidapi.com/v3/leagues', {
          params: {
            type: 'Cup'
          },
          headers: {
            'X-RapidAPI-Key': '96d6e2db0bmshaefc24c363be681p18096ejsn20efc89ac5c0',
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
          }
        });
        setCups(response.data.response);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleCupClick = (cupId) => {
    navigate(`/cup/${cupId}`);
  };

  const handleVoiceSearch = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'en-IN';
    recognition.onstart = () => {
      setShowSpeakNow(true);
    };
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setSearchQuery(transcript);
      setShowSpeakNow(false);
    };
    recognition.onerror = () => {
      alert('Please try again.');
      setShowSpeakNow(false);
    };
    recognition.start();
  };

  // Filter cups based on search query
  const filteredCups = cups.filter((cup) =>
    cup.league.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Cups</h1>
      {/* Speak Now Div */}
      {showSpeakNow && (
        <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert ">
        <span class="font-medium">Speak Now...</span>
        </div>
      )}
      {/* Search Form */}
      <form
        className="flex items-center max-w-lg mx-auto"
        onSubmit={(e) => e.preventDefault()}
      >
        <label htmlFor="voice-search" className="sr-only">
          Search
        </label>
        <input
          type="text"
          id="voice-search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search World Cup Name, International Women WorldCup Name .."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          required
        />
        <button
          type="button"
          onClick={handleVoiceSearch}
          className="inline-flex items-center px-2 ms-4 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition duration-300 ease-in-out"
        >
          <svg
            version="1.1"
            viewBox="0 0 150 150"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            className="w-5 h-5 mr-2"
          >
            {/* SVG code here */}
          </svg>
          Speak Now to Search
        </button>
      </form>

      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <div role="status">
            <svg
              aria-hidden="true"
              className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
          {filteredCups.map((cup) => (
            <div
              key={cup.league.id}
              onClick={() => handleCupClick(cup.league.id)}
            >
              <div className="rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 ease-in-out cup-card">
                <img
                  src={cup.league.logo || ''}
                  alt={cup.league.name}
                  className="w-20 h-auto mb-4 mx-auto"
                  onError={(e) => {
                    e.target.src =
                      'https://rapidapi-prod-apis.s3.amazonaws.com/d6/bad4e75b994d49897a95a6e7b6363b/5e91326f658012bfeb00102fe790edcd.png';
                    e.target.alt = 'Image not available';
                  }}
                />
                <h2 className="text-xl font-semibold text-center">
                  {cup.league.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cups;
