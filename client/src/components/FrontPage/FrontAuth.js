import React, { useState } from "react";
import "./FrontAuth.css"; // Import the CSS file
import { Link } from "react-router-dom";

const FrontAuth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  return (
    <form className="max-w-md mx-auto p-4 bg-transparent">
      <div className="relative mb-6">
        <span className="absolute left-3 top-2 text-gray-400">
          <i className="fas fa-envelope"></i>
        </span>
        <input
          type="email"
          id="floatingInput"
          placeholder=" "
          className={`block w-80 lg:w-[30rem] pl-10 pt-6 pr-5  bg-gray-800 bg-opacity-50 text-white border border-gray-400 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50 ${
            emailFocused ? "pt-6 pb-2 pl-10" : "h-12"
          }`}
          onFocus={() => setEmailFocused(true)}
          onBlur={() => setEmailFocused(false)}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label
          htmlFor="floatingInput"
          className={`absolute left-10 top-2 text-gray-400 transition-all duration-200 ease-in-out ${
            email || emailFocused ? "text-xs" : "text-base"
          } ${emailFocused ? "top-1" : "top-2"} ${email ? "text-xs" : ""}`}
        >
          Email address
        </label>
      </div>
      <div className="relative mb-6">
        <span
          className="absolute right-3 lg:-right-12  top-[0.6rem] text-gray-400 cursor-pointer"
          onClick={() => setShowPassword(!showPassword)}
        >
          <i className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
        </span>
        <span className="absolute left-3 top-2 text-gray-400">
          <i className="fas fa-key"></i>
        </span>
        <input
          type={showPassword ? "text" : "password"}
          id="floatingPassword"
          placeholder=" "
          className={`block w-80  lg:w-[30rem] pl-10 pt-6 pr-16  bg-gray-800 bg-opacity-50 text-white border border-gray-400 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50 ${
            passwordFocused ? "pt-6 pb-2 pl-10" : "h-12"
          }`}
          onFocus={() => setPasswordFocused(true)}
          onBlur={() => setPasswordFocused(false)}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <label
          htmlFor="floatingPassword"
          className={`absolute left-10 top-2 text-gray-400 transition-all duration-200 ease-in-out ${
            password || passwordFocused ? "text-xs" : "text-base"
          } ${passwordFocused ? "top-1" : "top-2"} ${
            password ? "text-xs" : ""
          }`}
        >
          Password
        </label>
      </div>
      <div>
        <Link
          to="/football/home"
          className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-black rounded-lg bg-yellow-300 hover:bg-yellow-300  hover:font-semibold dark:focus:ring-blue-900 button shadow-lg     md:font-semibold  md:text-2xl font-[Josefin Sans,sans-serif]  sm:py-3  sm:px-5 "
        >
          Get Started
          <svg
            className="w-3.5 h-3.5 ms-2 rtl:rotate-180 icon"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </form>
  );
};

export default FrontAuth;
