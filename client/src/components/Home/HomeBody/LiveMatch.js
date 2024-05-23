import React from "react";
import { NavLink } from "react-router-dom";

const LiveMatch = () => {
  return (
    <div className=" m-4">
      <div className="container">
        <div class="bg-zinc-800 text-white p-4 rounded-lg max-w-sm mx-auto">
          <div class="flex justify-between items-center text-xs text-blue-400 mb-2">
            <h1 className="pb-4">UERO Europa Cup</h1>
          </div>
          <div class="flex justify-between items-center mb-4">
            <img
              src="https://placehold.co/50x50"
              alt="Sevilla U19"
              class="w-12 h-12"
            />
            <div class="text-center">
              <div class="text-2xl font-bold text-red-500">1 - 2</div>
              <div class="text-xs text-zinc-400">ET-116:14</div>
            </div>
            <img
              src="https://placehold.co/50x50"
              alt="Real Betis"
              class="w-12 h-12"
            />
          </div>
          <div class="flex justify-between text-sm">
            <div class="text-center">
              <div>Sevilla U19</div>
              <div class="text-zinc-400">B. Sow 36'</div>
            </div>
            <div class="text-center">
              <div>Real Betis</div>
              <div class="text-zinc-400">
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
