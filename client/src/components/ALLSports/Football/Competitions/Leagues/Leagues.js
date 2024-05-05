
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import 'aos/dist/aos.css';

// export default function Leagues() {
//   const [leagues, setLeagues] = useState([]);
//   const [loading, setLoading] = useState(true); // Add loading state

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://api-football-v1.p.rapidapi.com/v3/leagues?type=League', {
//           headers: {
//             'X-RapidAPI-Key': '96d6e2db0bmshaefc24c363be681p18096ejsn20efc89ac5c0',
//             'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
//           }
//         });
//         setLeagues(response.data.response);
//         setLoading(false); // Set loading to false after data is fetched
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="container mx-auto py-8">
//       <h1 className="text-3xl font-bold mb-4">Leagues</h1>
//       {loading ? ( // Conditionally render loading spinner
//         <div className="flex items-center justify-center h-screen">
//           <div role="status">
//             <svg
//               aria-hidden="true"
//               className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
//               viewBox="0 0 100 101"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
//                 fill="currentColor"
//               />
//               <path
//                 d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
//                 fill="currentFill"
//               />
//             </svg>
//             <span className="sr-only">Loading...</span>
//           </div>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           {leagues.map((league) => (
//             <div
//               key={league.league.id}
//               className="rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 ease-in-out"
//             >
//               <img
//                 src={league.league.logo}
//                 alt={league.league.name}
//                 className="w-20 h-auto mb-4 mx-auto"
//                 onError={(e) => {
//                   e.target.src = '';
//                   e.target.alt = 'Image not available';
//                 }}
//               />
//               <h2 className="text-xl font-semibold text-center">{league.league.name}</h2>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import 'aos/dist/aos.css';
// import './Leagues.css';
// import { useNavigate } from 'react-router-dom';

// export default function Leagues() {
//   const [leagues, setLeagues] = useState([]);
//   const [loading, setLoading] = useState(true); // Add loading state
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://api-football-v1.p.rapidapi.com/v3/leagues?type=League', {
//           headers: {
//             'X-RapidAPI-Key': '96d6e2db0bmshaefc24c363be681p18096ejsn20efc89ac5c0',
//             'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
//           }
//         });
//         setLeagues(response.data.response);
//         setLoading(false); // Set loading to false after data is fetched
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleLeagueClick = (leagueID) => {
//     navigate(`/league/${leagueID}`); // Navigate to the league page
//   };

//   return (
//     <section className="container mx-auto py-8">
//       <h1 className="text-3xl font-bold mb-4 mt-4">Leagues</h1>
//       {loading ? ( // Conditionally render loading spinner
//         <div className="flex items-center justify-center h-screen mt-3">
//           <div role="status">
//             <svg
//               aria-hidden="true"
//               className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
//               viewBox="0 0 100 101"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
//                 fill="currentColor"
//               />
//               <path
//                 d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
//                 fill="currentFill"
//               />
//             </svg>
//             <span className="sr-only">Loading...</span>
//           </div>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           {leagues.map((league) => (
//             <div
//               key={league.league.id}
//               className="league-card rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 ease-in-out"
//               onClick={() => handleLeagueClick(league.league.id)} // Call handleLeagueClick on click
//             >
//               <img
//                 src={league.league.logo}
//                 alt={league.league.name}
//                 className="w-20 h-auto mb-4 mx-auto"
//                 onError={(e) => {
//                   e.target.src = '';
//                   e.target.alt = 'Image not available';
//                 }}
//               />
//               <h2 className="text-xl font-semibold text-center">{league.league.name}</h2>
//             </div>
//           ))}
//         </div>
//       )}
//     </section>
//   );
// }


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Leagues.css';

function Leagues() {
  const [leagues, setLeagues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchBox, setSearchBox] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api-football-v1.p.rapidapi.com/v3/leagues?type=League', {
          headers: {
            'X-RapidAPI-Key': '96d6e2db0bmshaefc24c363be681p18096ejsn20efc89ac5c0',
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
          }
        });
        setLeagues(response.data.response);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleLeagueClick = (leagueID) => {
    navigate(`/league/${leagueID}`);
  };

  const handleSearch = () => {
    setSearchBox(true); // Show search box
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setSearchBox(false); // Hide search box
  };

  const filteredLeagues = leagues.filter((league) =>
    league.league.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4 mt-4">Leagues</h1>

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
            placeholder="League Name"
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

          {/* Submit button (hidden) */}
          <button type="submit" className="hidden"></button>
        </form>
      </div>

      {/* Search suggestion box */}
      {isSearchBox && (
        <div className='searchbox absolute z-50 mt-2 w-full'>
          <ul className="bg-white border border-gray-200 rounded-lg w-auto shadow-md sm:w-full lg:w-[80%] md:w-[80%]">
            {filteredLeagues.map((league) => (
              <li
                key={league.league.id}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100 flex items-center"
                onClick={() => {
                  handleLeagueClick(league.league.id);
                  setSearchBox(false);
                }}
              >
                <div className="flex items-center">
                  <img
                    src={league.league.logo}
                    alt={league.league.name}
                    className="w-8 h-auto mr-2"
                    onError={(e) => {
                      e.target.src = 'https://example.com/default.jpg'; // Provide a default image URL
                      e.target.alt = 'Image not available';
                    }}
                  />
                  <span>{league.league.name}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Loading or League Cards */}
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
                d="M93.9676 50.5908C93.9676 69.2643 78.9271 84.3047 60.2535 84.3047C41.5799 84.3047 26.5394 69.2643 26.5394 50.5908C26.5394 31.9172 41.5799 16.8767 60.2535 16.8767C78.9271 16.8767 93.9676 31.9172 93.9676 50.5908Z"
                fill="#007BFF"
              />
            </svg>
          </div>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredLeagues.map((league) => (
            <div
              key={league.league.id}
              className="bg-white rounded-lg shadow-md dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 p-4 cursor-pointer transition-colors duration-300 ease-in-out"
              onClick={() => handleLeagueClick(league.league.id)}
            >
              <img
                src={league.league.logo}
                alt={league.league.name}
                className="w-20 h-20 mx-auto mb-2"
                onError={(e) => {
                  e.target.src = 'https://example.com/default.jpg'; // Provide a default image URL
                  e.target.alt = 'Image not available';
                }}
              />
              <div className="text-center">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white">{league.league.name}</h2>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Leagues;
