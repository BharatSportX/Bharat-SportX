

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


  // const handleCurrentCup = async () => {
  //   try {
  //     const res = await axios.get("https://api-football-v1.p.rapidapi.com/v3/leagues", {
  //       params: {
  //         type: "Cup",
  //         current: "true"
  //       },
  //       headers: {
  //         'X-RapidAPI-Key': '96d6e2db0bmshaefc24c363be681p18096ejsn20efc89ac5c0',
  //         'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
  //       }
  //     });
  //     console.log(res.data); // Handle the response data
  //   } catch (error) {
  //     console.error(error); // Handle the error
  //   }
  // };

  // useEffect(() => {
  //   handleCurrentCup();
  // }, []);
  const handleCupClick = (cupId) => {
    navigate(`/football/league/world-cup/cup/${cupId}`);
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
    <div className="container mx-auto py-8 relative overflow-x-hidden top-36 dark:bg-slate-800 text-white">
      <h1 className="text-3xl font-bold mb-4  text-black dark:text-white">Cups</h1>

      {/* Speak Now Div */}
     
      {showSpeakNow && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50 lg:mt-15 sm:mt-25">
          <div className="bg-white rounded-lg p-8    text-black dark:bg-slate-700  dark:text-white spekaborder">
            <p className="text-xl font-semibold mb-4">Speak Now</p>
            <p className="mb-4">Speak into the microphone...</p>
            {isListening && (

              <div className="w-4 h-4 bg-red-500 rounded-full animate-ping">

              </div>



            )}
          </div>
        </div>
      )}

      

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
            placeholder="World Cup Name,International Women"
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

      {/* Current Cups Button */}
      <button type="button" class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" > Current <span>(2)</span> Cups </button>

      {isDanger && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mt-3 rounded relative dark:bg-slate-600  dark:text-violet-900  dark:bg-opacity-5 " role="alert">
          <strong className="font-bold">No result found!</strong>
          <span className="block sm:inline"> Please try a different search query.</span>
        </div>
      )}
      {isSuccess && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 mt-4 rounded relative    dark:bg-slate-600  dark:text-violet-900  dark:bg-opacity-5" role="alert">
          <strong className="font-bold ">Great!</strong>
          <span className="block sm:inline"> Showing the result for {searchQuery}</span>
        </div>

      )}
     
 {isSearchBox && (

  <div className='searchbox absolute z-50 mt-2 w-full'>
    <ul className="bg-white border border-gray-200 rounded-lg w-auto shadow-md sm:w-full lg:w-[80%] md:w-[90%] darK:bg-black-border dark:border-gray-500">
      {filteredCups.map((cup) => {   
        const parts = cup.league.name.split(new RegExp(`(${searchQuery})`, 'gi'));
        return (
          <li
            key={cup.league.id}
            className="px-4 py-2 cursor-pointer flex items-center hover:bg-slate-300 bg-white text-black  dark:bg-black dark:text-slate-200 dark:hover:bg-slate-600"
          >
            <Link to={`/football/league/world-cup/cup/${cup.league.id}`} onClick={() => setSearchBox(false)}>
              <div className="flex items-center">
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
                    fillRule="evenodd"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="whitespace-no-wrap">
                  <img src={`${cup.league.logo}`} className="w-15 h-12 mx-auto sm:w-6 md:w-20 lg:w-15 xl:w-6" alt={`${cup.league.name}`}/>
                </span>

                {parts.map((part, index) => (
                  <React.Fragment key={index}>
                    {part.toLowerCase() === searchQuery.toLowerCase() ? (
                      <span style={{ fontWeight: 'bold' }}>{part}</span>
                    ) : (
                      <span>{part}</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  </div>
)}


      {/* Loading or Cup Cards */}
      {loading ? (
      <div class="flex items-center justify-center w-full h-[100vh] text-gray-900 dark:text-gray-100 dark:bg-gray-950">
      <div>
        <h1 class="text-xl md:text-7xl font-bold flex items-center">L<svg stroke="currentColor" fill="currentColor" stroke-width="0"
            viewBox="0 0 24 24" class="animate-spin" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM13.6695 15.9999H10.3295L8.95053 17.8969L9.5044 19.6031C10.2897 19.8607 11.1286 20 12 20C12.8714 20 13.7103 19.8607 14.4956 19.6031L15.0485 17.8969L13.6695 15.9999ZM5.29354 10.8719L4.00222 11.8095L4 12C4 13.7297 4.54894 15.3312 5.4821 16.6397L7.39254 16.6399L8.71453 14.8199L7.68654 11.6499L5.29354 10.8719ZM18.7055 10.8719L16.3125 11.6499L15.2845 14.8199L16.6065 16.6399L18.5179 16.6397C19.4511 15.3312 20 13.7297 20 12L19.997 11.81L18.7055 10.8719ZM12 9.536L9.656 11.238L10.552 14H13.447L14.343 11.238L12 9.536ZM14.2914 4.33299L12.9995 5.27293V7.78993L15.6935 9.74693L17.9325 9.01993L18.4867 7.3168C17.467 5.90685 15.9988 4.84254 14.2914 4.33299ZM9.70757 4.33329C8.00021 4.84307 6.53216 5.90762 5.51261 7.31778L6.06653 9.01993L8.30554 9.74693L10.9995 7.78993V5.27293L9.70757 4.33329Z">
            </path>
          </svg> ading . . .</h1>
      </div>
    </div>
      ) : (
       

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
  {filteredCups.map((cup) => (
    <div
      key={cup.league.id}
      onClick={() => handleCupClick(cup.league.id)}
    >
      <div className="rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 ease-in-out dark:rounded-lg dark:shadow-md cup-card">
        <img
          src={cup.league.logo || ''}
          alt={cup.league.name}
          className="w-20 h-auto mb-4 mx-auto dark:invert"
          onError={(e) => {
            e.target.src =
              'https://rapidapi-prod-apis.s3.amazonaws.com/d6/bad4e75b994d49897a95a6e7b6363b/5e91326f658012bfeb00102fe790edcd.png';
            e.target.alt = 'Image not available';
          }}
        />
        <h2 className="text-xl font-semibold text-center text-black dark:text-white">
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