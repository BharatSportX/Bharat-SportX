import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

export default function SeasonDropDownlist() {
    const { id } = useParams();
    const [season, setSeason] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedYear, setSelectedYear] = useState(null);
    const [loading, setLoading] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleYearChange = (year) => {
        setSelectedYear(year);
        setIsDropdownOpen(false);
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 1000);
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate();
        let suffix = '';
        if (day === 1 || day === 21 || day === 31) {
            suffix = 'st';
        } else if (day === 2 || day === 22) {
            suffix = 'nd';
        } else if (day === 3 || day === 23) {
            suffix = 'rd';
        } else {
            suffix = 'th';
        }
        const month = date.toLocaleString('default', { month: 'long' });
        return `${day}${suffix} ${month}`;
    };

    const calculateProgress = (start, end) => {
        const now = new Date();
        const startDate = new Date(start);
        const endDate = new Date(end);

        if (now < startDate) return 0;
        if (now > endDate) return 100;

        const totalDuration = endDate - startDate;
        const elapsedDuration = now - startDate;

        return (elapsedDuration / totalDuration) * 100;
    };

    useEffect(() => {
        const fetchSeason = async () => {
            try {
                const res = await axios.get("https://api-football-v1.p.rapidapi.com/v3/leagues", {
                    headers: {
                        'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
                        'x-rapidapi-key': '96aaecf1damsh08a26fec449dda1p149914jsn1d8a476e9c06'
                    },
                    params: {
                        type: "Cup",
                        id: id
                    }
                });
                setSeason(res.data.response[0].seasons);
            } catch (error) {
                console.error("Error fetching seasons: ", error);
            }
        };
        fetchSeason();
    }, [id]);

    const selectedSeason = season.find(s => s.year === selectedYear);

    return (
        <div className="p-4 max-w-md mx-auto">
            <div className="relative inline-block text-left w-full">
                <div>
                    <button
                        type="button"
                        className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                        id="menu-button"
                        aria-expanded="true"
                        aria-haspopup="true"
                        onClick={toggleDropdown}
                    >
                        {selectedYear ? `${selectedYear}` : 'Select Year'}
                        <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>

                {isDropdownOpen && (
                    <div className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                        <div className="py-1" role="none">
                            {season.map((seasonItem, index) => (
                                <Link
                                    to="#"
                                    className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                                    role="menuitem"
                                    tabIndex="-1"
                                    id={`menu-item-${index}`}
                                    key={index}
                                    onClick={() => handleYearChange(seasonItem.year)}
                                >
                                    {seasonItem.year}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

                {loading && (
                    <div className="mt-2">
                        <strong>Loading...</strong> Please wait..
                    </div>
                )}
            </div>
            {selectedYear && selectedSeason && (
                <div className="mt-4">
                    <div className="flex justify-between">
                        <p className="text-sm font-medium text-gray-700">{formatDate(selectedSeason.start)}</p>
                        <p className="text-sm font-medium text-gray-700">{formatDate(selectedSeason.end)}</p>
                    </div>
                    <div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden mt-2">
                        <div className="bg-blue-600 h-full rounded-full" style={{ width: `${calculateProgress(selectedSeason.start, selectedSeason.end)}%` }}></div>
                    </div>
                </div>
            )}
        </div>
    );
}
