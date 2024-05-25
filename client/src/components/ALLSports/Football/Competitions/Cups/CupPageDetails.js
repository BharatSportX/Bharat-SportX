
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import SeasonDropDownlist from './SeasonDropDownlist';

const CupPageDetails = () => {
    const { id } = useParams();
    const [cupData, setCupData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCupDetails = async () => {
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
                setCupData(res.data.response[0]);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchCupDetails();
    }, [id]);

    if (loading) {
        return (
            <div className="flex items-center justify-center w-full h-[100vh] text-gray-900 dark:text-gray-100 dark:bg-gray-950">
                <div>
                    <h1 className="text-xl md:text-7xl font-bold flex items-center">L<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="animate-spin" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM13.6695 15.9999H10.3295L8.95053 17.8969L9.5044 19.6031C10.2897 19.8607 11.1286 20 12 20C12.8714 20 13.7103 19.8607 14.4956 19.6031L15.0485 17.8969L13.6695 15.9999ZM5.29354 10.8719L4.00222 11.8095L4 12C4 13.7297 4.54894 15.3312 5.4821 16.6397L7.39254 16.6399L8.71453 14.8199L7.68654 11.6499L5.29354 10.8719ZM18.7055 10.8719L16.3125 11.6499L15.2845 14.8199L16.6065 16.6399L18.5179 16.6397C19.4511 15.3312 20 13.7297 20 12L19.997 11.81L18.7055 10.8719ZM12 9.536L9.656 11.238L10.552 14H13.447L14.343 11.238L12 9.536ZM14.2914 4.33299L12.9995 5.27293V7.78993L15.6935 9.74693L17.9325 9.01993L18.4867 7.3168C17.467 5.90685 15.9988 4.84254 14.2914 4.33299ZM9.70757 4.33329C8.00021 4.84307 6.53216 5.90762 5.51261 7.31778L6.06653 9.01993L8.30554 9.74693L10.9995 7.78993V5.27293L9.70757 4.33329Z"></path></svg> ading . . .</h1>
                </div>
            </div>
        );
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    if (!cupData) {
        return <div>No data available</div>;
    }

    return (
        <>
            <div className="grid sm:grid-cols-1 lg:grid-cols-3 lg:gap-2 relative overflow-x-hidden top-40">
                <div className="col-span-2 sm:col-span-1 mr-3 lg:col-span-2 ml-3 ">
                    <div className="border rounded-lg bg-red-200 bg-opacity-75 p-4 flex items-center">
                        <div className="flex-none mr-4">
                            <img src={cupData.league.logo} alt="Club" className="w-16 h-16 rounded-full" />
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-xl font-semibold mb-2">{cupData.league.name}</h2>
                            <p>{cupData.country.name}</p>

                            <div className="inline-flex">
                                <SeasonDropDownlist />
                            </div>

                        </div>
                    </div>
                </div>

                <div className="col-span-1 sm:col-span-1 ml-4 lg:col-span-1 mr-3 border rounded-lg p-4 shadow-md ">
                    <h1 className="text-xl font-bold mb-4">Featured Match</h1>

                    <div className="mb-4">
                        <p className="text-lg font-semibold">Club Name</p>
                        <p>Type of Club</p>
                        <p>Final Match</p>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <img src="german_logo.jpg" alt="German Logo" className="w-8 h-8 mr-2" />
                                <span className="mr-2">German</span>
                            </div>
                            <div className="flex items-center">
                                <span className="mr-2">3</span>
                                <span className="mr-2 flex justify-center">Vs</span>
                                <span className="mr-2">2</span>
                            </div>
                            <div className="flex items-center">
                                <img src="newlikand_logo.jpg" alt="Newlikand Logo" className="w-8 h-8 mr-2" />
                                <span>Newlikand</span>
                            </div>
                        </div>
                        <div className="text-gray-500">Finished</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CupPageDetails;
