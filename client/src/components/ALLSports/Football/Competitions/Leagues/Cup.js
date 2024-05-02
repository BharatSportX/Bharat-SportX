
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Cup.css';

function Cups() {
  const [cups, setCups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSpeakNow, setShowSpeakNow] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isDanger, setIsDanger] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSearchBox, setSearchBox] = useState(false);
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
    let timeoutId;

    recognition.lang = 'en-IN'; // Set recognition language

    recognition.onstart = () => {
      setIsListening(true);
      setShowSpeakNow(true);
      timeoutId = setTimeout(() => {
        recognition.stop();
        setShowSpeakNow(false);
        setIsListening(false);
      }, 6000);
    };

    recognition.onresult = (event) => {
      clearTimeout(timeoutId);
      const speechResult = event.results[0][0].transcript;
      setSearchQuery(speechResult); // Set the search query to the recognized speech
      // Handle recognition result...
    };

    recognition.onend = () => {
      setShowSpeakNow(false); // Close modal when speech ends
      setIsListening(false);
    };

    recognition.onerror = () => {
      clearTimeout(timeoutId);
      setShowSpeakNow(false);
      setIsListening(false);
      setIsDanger(true);
      setIsSuccess(false);
      setTimeout(() => {
        setIsDanger(false);
      }, 3000);
    };

    recognition.start();
  };



  useEffect(() => {
    handleSearch(); // Call handleSearch on every render
  });

  const handleSearch = () => {
    // Perform search process
    // For now, I'm just logging the searchQuery
    // console.log('Search query:', searchQuery);
    if (searchQuery) {
      const filtered = cups.filter((cup) =>
        cup.league.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (!searchQuery) {
        setSearchBox(true);
        return;
      }
      if (filtered.length === 0) {
        // No result found, show danger alert
        setIsDanger(true);
        setIsSuccess(false);
        //Set search box suggestion False
        setSearchBox(false)
        setTimeout(() => {
          setIsDanger(false);
        }, 3000);
      } else {
        // Result found, show success alert
        setIsDanger(false);
        setIsSuccess(true);
        //Show Search suggestion box
        setSearchBox(true)
        setTimeout(() => {
          setIsSuccess(false);
        }, 3000);
      }
      // Clear search query after displaying alerts

    }
  };




  const handleClearSearch = () => {
    setSearchQuery('');
    //when user clcik on cross button then the search box hide
    setSearchBox(false)
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
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-8">
            <p className="text-xl font-semibold mb-4">Speak Now</p>
            <p className="mb-4">Speak into the microphone...</p>
            {isListening && (

              <div className="w-4 h-4 bg-red-500 rounded-full animate-ping">

              </div>



            )}
          </div>
        </div>
      )}

      {/* Search Form */}
      {/* <form
        className="relative flex items-center max-w-lg mx-auto"
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
      > */}
      {/* <label htmlFor="voice-search" className="sr-only">
          Search
        </label>
        <input
          type="text"
          id="voice-search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="World Cup Name,International Women WorldCup Name .."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          required
        /> */}

      {/* Clear button */}
      {/* {searchQuery && (
          <button
            type="button"
            onClick={handleClearSearch}
            className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-400 hover:text-gray-600 focus:outline-none cross-button"
            style={{ top: '50%', transform: 'translateY(-50%)', marginRight: '35px' }}
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )} */}
      {/* Microphone icon */}
      {/* <button
          type="button"
          onClick={handleVoiceSearch}
          className="absolute inset-y-0 right-0 flex items-center px-3 focus:outline-none microphone-button"
          style={{ top: '50%', transform: 'translateY(-50%)', marginRight: '5px' }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              fill="#4285F4"
              d="M12 15c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v7c0 1.66 1.34 3 3 3z"
            />
            <path fill="#34A853" d="M11 18.92h2V22h-2z" />
            <path
              fill="#F4B400"
              d="M7 12H5c0 1.93.78 3.68 2.05 4.95l1.41-1.41C7.56 14.63 7 13.38 7 12z"
            />
            <path
              fill="#EA4335"
              d="M12 17c-1.38 0-2.63-.56-3.54-1.47l-1.41 1.41A6.99 6.99 0 0 0 12.01 19c3.87 0 6.98-3.14 6.98-7h-2c0 2.76-2.23 5-4.99 5z"
            />
          </svg>
        </button> */}
      {/* Submit button (hidden) */}
      {/* <button type="submit" className="hidden"></button>
      </form> */}

      <div className='relative'>
        <form
          className="relative flex items-center max-w-lg mx-auto"
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
          <label htmlFor="voice-search" className="sr-only">
            Search
          </label>
          <input
            type="text"
            id="voice-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="World Cup Name,International Women WorldCup Name .."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            required
          />

          {/* Clear button */}
          {searchQuery && (
            <button
              type="button"
              onClick={handleClearSearch}
              className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-400 hover:text-gray-600 focus:outline-none cross-button"
              style={{ top: '50%', transform: 'translateY(-50%)', marginRight: '35px' }}
            >
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
          {/* Microphone icon */}
          <button
            type="button"
            onClick={handleVoiceSearch}
            className="absolute inset-y-0 right-0 flex items-center px-3 focus:outline-none microphone-button"
            style={{ top: '50%', transform: 'translateY(-50%)', marginRight: '5px' }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                fill="#4285F4"
                d="M12 15c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v7c0 1.66 1.34 3 3 3z"
              />
              <path fill="#34A853" d="M11 18.92h2V22h-2z" />
              <path
                fill="#F4B400"
                d="M7 12H5c0 1.93.78 3.68 2.05 4.95l1.41-1.41C7.56 14.63 7 13.38 7 12z"
              />
              <path
                fill="#EA4335"
                d="M12 17c-1.38 0-2.63-.56-3.54-1.47l-1.41 1.41A6.99 6.99 0 0 0 12.01 19c3.87 0 6.98-3.14 6.98-7h-2c0 2.76-2.23 5-4.99 5z"
              />
            </svg>
          </button>
          {/* Submit button (hidden) */}
          <button type="submit" className="hidden"></button>
        </form>
      </div>

      {isDanger && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mt-3 rounded relative" role="alert">
          <strong className="font-bold">No result found!</strong>
          <span className="block sm:inline"> Please try a different search query.</span>
        </div>
      )}
      {isSuccess && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 mt-4 rounded relative" role="alert">
          <strong className="font-bold">Great!</strong>
          <span className="block sm:inline"> Showing the result for {searchQuery}</span>
        </div>

      )}
      {/* {isSearchBox && (
        <div className='searchbox'>
          <ul className="absolute z-10 bg-white border border-gray-200 rounded-lg w-full mt-1">
            {filteredCups.map((cup) => (
              <li
                key={cup.league.id}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => setSearchQuery(cup.league.name)}
              >
                {cup.league.name}
              </li>
            ))}
          </ul>
        </div>
      )} */}


      {isSearchBox && (
        <div className='searchbox absolute z-50 mt-2 w-full'>
          <ul className="bg-white border border-gray-200 rounded-lg w-auto shadow-md sm:w-full lg:w-[80%] md:w-[80%]">
            {filteredCups.map((cup) => (
              <li
                key={cup.league.id}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100 flex items-center"
              >
                <Link to={`/cup/${cup.league.id}`} onClick={() => setSearchBox(false)}>
                  <div className="flex items-center"> {/* Wrap the elements in a flex container */}
                    <svg
                      width="20"
                      height="20"
                      className="DocSearch-Search-Icon mr-2"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
                        stroke="currentColor"
                        fill="none"
                        fill-rule="evenodd"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span>{cup.league.name}</span> {/* Cup name */}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}







      {/* Loading or Cup Cards */}
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
              <div className="rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 ease-in-out cup-card ">
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
