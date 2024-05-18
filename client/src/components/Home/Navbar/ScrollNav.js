// src/ScrollNav.js
import React from "react";
import { NavLink } from "react-router-dom";

const ScrollNav = () => {
  return (
    <div className="overflow-x-auto bg-gray-800">
      <div className="inline-flex space-x-8 whitespace-nowrap p-4">
        <NavLink
          to="/"
          className="flex flex-col items-center text-gray-400"
          activeClassName="active-nav-item"
        >
          <div className="w-6 h-6 mb-1 rounded-full bg-opacity-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M12 12a3.15 3.15 0 113.15-3.15A3.15 3.15 0 0112 12zm0 1.9a8.44 8.44 0 00-6.6 3.29V21h13.2v-3.81A8.44 8.44 0 0012 13.9z" />
            </svg>
          </div>
          <span className="transition-all duration-300">Football</span>
        </NavLink>
        <NavLink
          to="/"
          className="flex flex-col items-center text-gray-400"
          activeClassName="active-nav-item"
        >
          <div className="w-6 h-6 mb-1 rounded-full bg-opacity-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M12 12a3.15 3.15 0 113.15-3.15A3.15 3.15 0 0112 12zm0 1.9a8.44 8.44 0 00-6.6 3.29V21h13.2v-3.81A8.44 8.44 0 0012 13.9z" />
            </svg>
          </div>
          <span className="transition-all duration-300">Cricket</span>
        </NavLink>
        <NavLink
          to="/"
          className="flex flex-col items-center text-gray-400"
          activeClassName="active-nav-item"
        >
          <div className="w-6 h-6 mb-1 rounded-full bg-opacity-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M12 12a3.15 3.15 0 113.15-3.15A3.15 3.15 0 0112 12zm0 1.9a8.44 8.44 0 00-6.6 3.29V21h13.2v-3.81A8.44 8.44 0 0012 13.9z" />
            </svg>
          </div>
          <span className="transition-all duration-300">Hockey</span>
        </NavLink>
       
        <NavLink
          to="/"
          className="flex flex-col items-center text-gray-400"
          activeClassName="active-nav-item"
        >
          <div className="w-6 h-6 mb-1 rounded-full bg-opacity-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M12 12a3.15 3.15 0 113.15-3.15A3.15 3.15 0 0112 12zm0 1.9a8.44 8.44 0 00-6.6 3.29V21h13.2v-3.81A8.44 8.44 0 0012 13.9z" />
            </svg>
          </div>
          <span className="transition-all duration-300">Kabaddi</span>
        </NavLink>
        <NavLink
          to="/"
          className="flex flex-col items-center text-gray-400"
          activeClassName="active-nav-item"
        >
          <div className="w-6 h-6 mb-1 rounded-full bg-opacity-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M12 12a3.15 3.15 0 113.15-3.15A3.15 3.15 0 0112 12zm0 1.9a8.44 8.44 0 00-6.6 3.29V21h13.2v-3.81A8.44 8.44 0 0012 13.9z" />
            </svg>
          </div>
          <span className="transition-all duration-300">Baseball</span>
        </NavLink>
        <NavLink
          to="/"
          className="flex flex-col items-center text-gray-400"
          activeClassName="active-nav-item"
        >
          <div className="w-6 h-6 mb-1 rounded-full bg-opacity-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M12 12a3.15 3.15 0 113.15-3.15A3.15 3.15 0 0112 12zm0 1.9a8.44 8.44 0 00-6.6 3.29V21h13.2v-3.81A8.44 8.44 0 0012 13.9z" />
            </svg>
          </div>
          <span className="transition-all duration-300">Volleyball</span>
        </NavLink>
        <NavLink
          to="/"
          className="flex flex-col items-center text-gray-400"
          activeClassName="active-nav-item"
        >
          <div className="w-6 h-6 mb-1 rounded-full bg-opacity-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M12 12a3.15 3.15 0 113.15-3.15A3.15 3.15 0 0112 12zm0 1.9a8.44 8.44 0 00-6.6 3.29V21h13.2v-3.81A8.44 8.44 0 0012 13.9z" />
            </svg>
          </div>
          <span className="transition-all duration-300">Archery</span>
        </NavLink>
        
        <NavLink
          to="/"
          className="flex flex-col items-center text-gray-400"
          activeClassName="active-nav-item"
        >
          <div className="w-6 h-6 mb-1 rounded-full bg-opacity-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M12 12a3.15 3.15 0 113.15-3.15A3.15 3.15 0 0112 12zm0 1.9a8.44 8.44 0 00-6.6 3.29V21h13.2v-3.81A8.44 8.44 0 0012 13.9z" />
            </svg>
          </div>
          <span className="transition-all duration-300">Golf</span>
        </NavLink>
       
        <NavLink
          to="/"
          className="flex flex-col items-center text-gray-400"
          activeClassName="active-nav-item"
        >
          <div className="w-6 h-6 mb-1 rounded-full bg-opacity-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M12 12a3.15 3.15 0 113.15-3.15A3.15 3.15 0 0112 12zm0 1.9a8.44 8.44 0 00-6.6 3.29V21h13.2v-3.81A8.44 8.44 0 0012 13.9z" />
            </svg>
          </div>
          <span className="transition-all duration-300">Athletics</span>
        </NavLink>
        <NavLink
          to="/"
          className="flex flex-col items-center text-gray-400"
          activeClassName="active-nav-item"
        >
          <div className="w-6 h-6 mb-1 rounded-full bg-opacity-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M12 12a3.15 3.15 0 113.15-3.15A3.15 3.15 0 0112 12zm0 1.9a8.44 8.44 0 00-6.6 3.29V21h13.2v-3.81A8.44 8.44 0 0012 13.9z" />
            </svg>
          </div>
          <span className="transition-all duration-300">Chess</span>
        </NavLink>
        <NavLink
          to="/"
          className="flex flex-col items-center text-gray-400"
          activeClassName="active-nav-item"
        >
          <div className="w-6 h-6 mb-1 rounded-full bg-opacity-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M12 12a3.15 3.15 0 113.15-3.15A3.15 3.15 0 0112 12zm0 1.9a8.44 8.44 0 00-6.6 3.29V21h13.2v-3.81A8.44 8.44 0 0012 13.9z" />
            </svg>
          </div>
          <span className="transition-all duration-300">Carrom</span>
        </NavLink>
        <NavLink
          to="/"
          className="flex flex-col items-center text-gray-400"
          activeClassName="active-nav-item"
        >
          <div className="w-6 h-6 mb-1 rounded-full bg-opacity-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M12 12a3.15 3.15 0 113.15-3.15A3.15 3.15 0 0112 12zm0 1.9a8.44 8.44 0 00-6.6 3.29V21h13.2v-3.81A8.44 8.44 0 0012 13.9z" />
            </svg>
          </div>
          <span className="transition-all duration-300">Boxing</span>
        </NavLink>
        <NavLink
          to="/"
          className="flex flex-col items-center text-gray-400"
          activeClassName="active-nav-item"
        >
          <div className="w-6 h-6 mb-1 rounded-full bg-opacity-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M12 12a3.15 3.15 0 113.15-3.15A3.15 3.15 0 0112 12zm0 1.9a8.44 8.44 0 00-6.6 3.29V21h13.2v-3.81A8.44 8.44 0 0012 13.9z" />
            </svg>
          </div>
          <span className="transition-all duration-300">Gymnastic</span>
        </NavLink>
        <NavLink
          to="/"
          className="flex flex-col items-center text-gray-400"
          activeClassName="active-nav-item"
        >
          <div className="w-6 h-6 mb-1 rounded-full bg-opacity-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M12 12a3.15 3.15 0 113.15-3.15A3.15 3.15 0 0112 12zm0 1.9a8.44 8.44 0 00-6.6 3.29V21h13.2v-3.81A8.44 8.44 0 0012 13.9z" />
            </svg>
          </div>
          <span className="transition-all duration-300">Ice-Skating</span>
        </NavLink>
        <NavLink
          to="/"
          className="flex flex-col items-center text-gray-400"
          activeClassName="active-nav-item"
        >
          <div className="w-6 h-6 mb-1 rounded-full bg-opacity-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M12 12a3.15 3.15 0 113.15-3.15A3.15 3.15 0 0112 12zm0 1.9a8.44 8.44 0 00-6.6 3.29V21h13.2v-3.81A8.44 8.44 0 0012 13.9z" />
            </svg>
          </div>
          <span className="transition-all duration-300">Basketball</span>
        </NavLink>
        <NavLink
          to="/"
          className="flex flex-col items-center text-gray-400"
          activeClassName="active-nav-item"
        >
          <div className="w-6 h-6 mb-1 rounded-full bg-opacity-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M12 12a3.15 3.15 0 113.15-3.15A3.15 3.15 0 0112 12zm0 1.9a8.44 8.44 0 00-6.6 3.29V21h13.2v-3.81A8.44 8.44 0 0012 13.9z" />
            </svg>
          </div>
          <span className="transition-all duration-300">Weight-Lifting</span>
        </NavLink>
        <NavLink
          to="/"
          className="flex flex-col items-center text-gray-400"
          activeClassName="active-nav-item"
        >
          <div className="w-6 h-6 mb-1 rounded-full bg-opacity-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M12 12a3.15 3.15 0 113.15-3.15A3.15 3.15 0 0112 12zm0 1.9a8.44 8.44 0 00-6.6 3.29V21h13.2v-3.81A8.44 8.44 0 0012 13.9z" />
            </svg>
          </div>
          <span className="transition-all duration-300">Wrestling</span>
        </NavLink>
      </div>
    </div>
  );
};

// SVG Icons

export default ScrollNav;
