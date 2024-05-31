import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Standings = ({ selectedYear, leagueId }) => {
    const [standings, setStandings] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const apiKey = '96aaecf1damsh08a26fec449dda1p149914jsn1d8a476e9c06';

    useEffect(() => {
        const fetchStandings = async (retryCount = 0) => {
            try {
                const res = await axios.get("https://api-football-v1.p.rapidapi.com/v3/standings", {
                    headers: {
                        'x-rapidapi-key': apiKey,
                        'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
                    },
                    params: {
                        season: selectedYear,
                        league: leagueId
                    }
                });

                console.log('API response:', res.data); // Add this line

                if (res.data && res.data.response && res.data.response.length > 0 && res.data.response[0].league) {
                    console.log('Standings data:', res.data.response[0].league.standings[0]); // Add this line
                    setStandings(res.data.response[0].league.standings[0]);
                } else {
                    setError(new Error('No standings data available'));
                }
                setLoading(false);
            } catch (error) {
                if (error.response && error.response.status === 429 && retryCount < 3) {
                    setTimeout(() => fetchStandings(retryCount + 1), 3000);
                } else {
                    setError(error);
                    setLoading(false);
                }
            }
        };

        if (selectedYear && leagueId) {
            fetchStandings();
        }
    }, [selectedYear, leagueId]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!standings) return <div>No standings available</div>;

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Standings</h2>
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="py-2">Position</th>
                        <th className="py-2">Team</th>
                        <th className="py-2">Points</th>
                    </tr>
                </thead>
                <tbody>
                    {standings.map((team, index) => (
                        <tr key={index}>
                            <td className="py-2">{team.rank}</td>
                            <td className="py-2">{team.team.name}</td>
                            <td className="py-2">{team.points}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Standings;
