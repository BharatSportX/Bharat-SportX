import React from "react";
import { NavLink } from "react-router-dom";

const LiveMatch = () => {
  return (
    <div classNameName=" m-4">
      <div classNameName="container">
        <div className="bg-zinc-800 text-white p-4 rounded-lg max-w-sm mx-auto">
          <div className="flex justify-between items-center text-xs text-blue-400 mb-2">
            <h1 classNameName="pb-4">UERO Europa Cup</h1>
          </div>
          <div className="flex justify-between items-center mb-4">
            <img
              src="https://placehold.co/50x50"
              alt="Sevilla U19"
              className="w-12 h-12"
            />
            <div className="text-center">
              <div className="text-2xl font-bold text-red-500">1 - 2</div>
              <div className="text-xs text-zinc-400">ET-116:14</div>
            </div>
            <img
              src="https://placehold.co/50x50"
              alt="Real Betis"
              className="w-12 h-12"
            />
          </div>
          <div className="flex justify-between text-sm">
            <div className="text-center">
              <div>Sevilla U19</div>
              <div className="text-zinc-400">B. Sow 36'</div>
            </div>
            <div className="text-center">
              <div>Real Betis</div>
              <div className="text-zinc-400">
                <div>Goal 96'</div>
                <div>Pablo García 48'</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveMatch;
