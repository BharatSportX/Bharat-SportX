// import React from "react";
// import { Link } from "react-router-dom";
// const Footer = () => {
//   return (
//     <div>
//       <footer class="p-4 md:p-8 lg:p-10 bg-black mt-2">
//         <div class="mx-auto max-w-screen-xl text-center">
//         <a
//             href="/"
//             // className="flex items-center space-x-3 rtl:space-x-reverse"
//           >
//             <span className="self-center text-3xl  font-semibold whitespace-nowrap  font-[Charm,cursive] pl-3 md:text-[2.5rem]">
//               <span className="text-orange-700 text-4xl md:text-[2.9rem]">B</span>
//               <span className="text-orange-700">h</span>
//               <span className=" text-white">ar</span>
//               <span className=" text-green-600">at</span>
//               <span className=" text-[#ffb300]">SportX</span>
//             </span>
//           </a>
//           <p class="my-6 text-gray-400">
//             Open-source library of over 400+ web components and interactive
//             elements built for better web.
//           </p>
//           <ul class="flex flex-wrap justify-center items-center mb-6 text-white">
//             <li>
//               <Link href="#" class="mr-4 hover:underline md:mr-6 ">
//                 About
//               </Link>
//             </li>
//             <li>
//               <a href="#" class="mr-4 hover:underline md:mr-6">
//                 Premium
//               </a>
//             </li>
//             <li>
//               <a href="#" class="mr-4 hover:underline md:mr-6 ">
//                 Campaigns
//               </a>
//             </li>
//             <li>
//               <a href="#" class="mr-4 hover:underline md:mr-6">
//                 Blog
//               </a>
//             </li>
//             <li>
//               <a href="#" class="mr-4 hover:underline md:mr-6">
//                 Affiliate Program
//               </a>
//             </li>
//             <li>
//               <a href="#" class="mr-4 hover:underline md:mr-6">
//                 FAQs
//               </a>
//             </li>
//             <li>
//               <a href="#" class="mr-4 hover:underline md:mr-6">
//                 Contact
//               </a>
//             </li>
//           </ul>
//           <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
//             © 2021-2022{" "}
//             <a href="#" class="hover:underline">
//               BharatSportX™
//             </a>
//             . All Rights Reserved.
//           </span>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Footer;
// import React from "react";

// const Footer = () => {
//   // Get current year and next year
//   const currentYear = new Date().getFullYear();
//   const nextYear = currentYear + 1;

//   return (
//     <footer className="p-4 md:p-8 lg:p-10 bg-black mt-2">
//       <div className="mx-auto max-w-screen-xl text-center">
//         <a href="/">
//           <span className="self-center text-3xl font-semibold whitespace-nowrap font-[Charm,cursive] pl-3 md:text-[2.5rem]">
//             <span className="text-orange-700 text-4xl md:text-[2.9rem]">B</span>
//             <span className="text-orange-700">h</span>
//             <span className="text-white">ar</span>
//             <span className="text-green-600">at</span>
//             <span className="text-[#ffb300]">SportX</span>
//           </span>
//         </a>
//         <p className="my-6 text-gray-400">
//           Open-source library of over 400+ web components and interactive elements built for better web.
//         </p>
//         <ul className="flex flex-wrap justify-center items-center mb-6 text-white">
//           <li>
//             <a href="#" className="mr-4 hover:underline md:mr-6">
//               About
//             </a>
//           </li>
//           <li>
//             <a href="#" className="mr-4 hover:underline md:mr-6">
//               Premium
//             </a>
//           </li>
//           <li>
//             <a href="#" className="mr-4 hover:underline md:mr-6">
//               Campaigns
//             </a>
//           </li>
//           <li>
//             <a href="#" className="mr-4 hover:underline md:mr-6">
//               Blog
//             </a>
//           </li>
//           <li>
//             <a href="#" className="mr-4 hover:underline md:mr-6">
//               Affiliate Program
//             </a>
//           </li>
//           <li>
//             <a href="#" className="mr-4 hover:underline md:mr-6">
//               FAQs
//             </a>
//           </li>
//           <li>
//             <a href="#" className="mr-4 hover:underline md:mr-6">
//               Contact
//             </a>
//           </li>
//         </ul>
//         <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
//           © {currentYear}-{nextYear}{" "}
//           <a href="#" className="hover:underline">
//             BharatSportX™
//           </a>
//           . All Rights Reserved.
//         </span>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  // Get current year and next year
  const currentYear = new Date().getFullYear();
  const nextYear = currentYear + 1;

  return (
    <footer className="p-4 md:p-8 lg:p-10 bg-black mt-2">
      <div className="mx-auto max-w-screen-xl text-center">
        <Link to="/">
          <span className="self-center text-3xl font-semibold whitespace-nowrap font-[Charm,cursive] pl-3 md:text-[2.5rem]">
            <span className="text-orange-700 text-4xl md:text-[2.9rem]">B</span>
            <span className="text-orange-700">h</span>
            <span className="text-white">ar</span>
            <span className="text-green-600">at</span>
            <span className="text-[#ffb300]">SportX</span>
          </span>
        </Link>
        <p className="my-6 text-gray-400">
          Your go-to platform for all things sports-related, offering live scores, player details, match predictions, statistics, and much more!
        </p>
        <ul className="flex flex-wrap justify-center items-center mb-6 text-white">
          <li>
            <Link to="#" className="mr-4 hover:underline md:mr-6">
              About 
            </Link>
          </li>
          <li>
            <Link to="#" className="mr-4 hover:underline md:mr-6">
              Subscription
            </Link>
          </li>
          <li>
            <Link to="#" className="mr-4 hover:underline md:mr-6">
              Campaigns
            </Link>
          </li>
          <li>
            <Link to="#" className="mr-4 hover:underline md:mr-6">
              Blog
            </Link>
          </li>
          <li>
            <Link to="#" className="mr-4 hover:underline md:mr-6">
              Affiliate Program
            </Link>
          </li>
          <li>
            <Link to="#" className="mr-4 hover:underline md:mr-6">
              FAQs
            </Link>
          </li>
          <li>
            <Link to="#" className="mr-4 hover:underline md:mr-6">
              Contact Us
            </Link>
          </li>
        </ul>
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {currentYear}-{nextYear}{" "}
          <span className="hover:underline">
            BharatSportX™
          </span>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
