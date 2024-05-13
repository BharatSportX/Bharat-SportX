// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// export default function Prediction() {
//   const { id: fixtureId } = useParams();
//   const [prediction, setPrediction] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const getPrediction = async () => {
//       try {
//         const response = await axios.get("https://api-football-v1.p.rapidapi.com/v3/predictions", {
//           params: { fixture: fixtureId },
//           headers: {
//             'X-RapidAPI-Key': '96d6e2db0bmshaefc24c363be681p18096ejsn20efc89ac5c0',
//             'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
//           }
//         });
//         setPrediction(response.data.response[0]); // Assuming there's only one prediction in the response
//         // console.log(response.data.response[0].predictions.advice)
//       } catch (error) {
//         console.error('Error fetching prediction:', error);
//         setError('Failed to fetch prediction data.');
//       }
//     };

//     getPrediction();
//   }, [fixtureId]);

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       {prediction ? (
//         <div>
//           <div>Winner: {prediction.predictions.winner.name ? prediction.predictions.winner.name : "Not available"}</div>
//           <div>Winner Comment: {prediction.predictions.winner.comment ? prediction.predictions.winner.comment : "Not available"}</div>
//           <div>Advice: {prediction.predictions.advice}</div>
//         </div>
//       ) : (
//         <div>Loading prediction...</div>
//       )}
//     </div>
//   );
// }
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Prediction() {
  const { id: fixtureId } = useParams();
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPrediction = async () => {
      try {
        const response = await axios.get("https://api-football-v1.p.rapidapi.com/v3/predictions", {
          params: { fixture: fixtureId },
          headers: {
            'X-RapidAPI-Key': '96d6e2db0bmshaefc24c363be681p18096ejsn20efc89ac5c0',
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
          }
        });
        setPrediction(response.data.response[0]); // Assuming there's only one prediction in the response
         // console.log(response.data.response[0].predictions.advice)
      } catch (error) {
        console.error('Error fetching prediction:', error);
        setError('Failed to fetch prediction data.');
      }
    };

    getPrediction();
  }, [fixtureId]);

  return (
    <div className="mx-auto max-w-lg mt-8">
      {error ? (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded" role="alert">
          <strong className="font-bold">Error:</strong>
          <span className="block sm:inline"> {error}</span>
        </div>
      ) : (
        <div>
          <h1 className="text-2xl font-bold mb-4">Prediction</h1>
          {prediction ? (
            <div className="bg-white rounded shadow-md p-6">
              <div className="mb-4">
                <span className="font-semibold">Winner:</span> {prediction.predictions.winner ? prediction.predictions.winner.name : "Not available"}
              </div>
              <div className="mb-4">
                <span className="font-semibold">Winner Comment:</span> {prediction.predictions.winner ? prediction.predictions.winner.comment : "Not available"}
              </div>
              <div className="mb-4">
                <span className="font-semibold">Advice:</span> {prediction.predictions.advice}
              </div>
            </div>
          ) : (
            <div className="bg-gray-100 border border-gray-400 text-gray-700 px-4 py-3 rounded" role="alert">
              <strong className="font-bold">Under Construction:</strong>
              <span className="block sm:inline"> This page is under construction. We will add all data very soon. Stay tuned!</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
