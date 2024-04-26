import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LeaguesHome() {
    const navigate=useNavigate()
  return (
   
    <div className=" container pt-3 mt-3">
      <div className="row">
        {/* World Cup Card */}
        <div className="col-md-6 mb-4 d-flex justify-content-around">
          {/* <Link to="/FootballWorldCup" className="text-decoration-none"> */}
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">World Cup</h5>
              <img className="h-auto w-full rounded-lg" src="https://i.ibb.co/VTx4Qrd/world-cup.jpg" alt="World Cup"></img>
              <button type="button"  class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-3" onClick={()=>{
                navigate('/FootballWorldCup')
              }}>Click Here</button>
            </div>
         
        </div>

        {/* Leagues Card */}
        <div className="col-md-6  d-flex justify-content-around">
          
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Leagues</h5>
              <img className="h-auto w-full rounded-lg" src="https://i.ibb.co/nk9mGJH/leagues.jpg" alt="Leagues"></img>
              <button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-3 " onClick={()=>[
                navigate('/FootballLeagues')
              ]}>Click Here</button>
            </div>
        
        </div>
      </div>
    </div>
    
  );
}
