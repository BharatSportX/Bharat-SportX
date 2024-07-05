// import React, { useState } from 'react';

// export default function AdminPanel() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="flex min-h-screen">
//       {/* Sidebar */}
//       <aside className={`${isSidebarOpen ? "w-64" : "w-16"} bg-gray-800 text-white transition-all duration-300`}>
//         <div className="flex items-center justify-between p-4">
//           <h1 className="text-lg font-bold">{isSidebarOpen ? "Employee Management" : "EM"}</h1>
//           <button className="text-white focus:outline-none" onClick={toggleSidebar}>
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           </button>
//         </div>
//         <div className="flex flex-col items-center p-4">
//           <div className="flex items-center mb-4">
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
//               <circle cx="12" cy="7" r="4" />
//             </svg>
//             {isSidebarOpen && <span className="ml-2 text-lg font-semibold">Administrator</span>}
//           </div>
//           <div className="relative w-full mb-4">
//             <input
//               type="search"
//               placeholder="Search..."
//               className="pl-10 pr-4 py-2 bg-gray-700 text-white rounded-md w-full"
//             />
//             <svg className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <circle cx="11" cy="11" r="8" />
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m21 21-4.3-4.3" />
//             </svg>
//           </div>
//           <nav className="w-full">
//             <h2 className="mb-2 text-sm font-semibold text-gray-400">Main Navigation</h2>
//             <ul className="space-y-2">
//               <li className="flex items-center p-2 hover:bg-gray-700 rounded-md">
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
//                   <polyline points="9 22 9 12 15 12 15 22" />
//                 </svg>
//                 {isSidebarOpen && <span className="ml-2">Dashboard</span>}
//               </li>
//               <li className="flex items-center p-2 hover:bg-gray-700 rounded-md">
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 22v-4h6v4" />
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 6h.01" />
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 6h.01" />
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6h.01" />
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10h.01" />
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14h.01" />
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 10h.01" />
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 14h.01" />
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01" />
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14h.01" />
//                 </svg>
//                 {isSidebarOpen && <span className="ml-2">Department</span>}
//               </li>
//               <li className="flex items-center p-2 hover:bg-gray-700 rounded-md">
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
//                   <circle cx="9" cy="7" r="4" />
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 21v-2a4 4 0 0 0-3-3.87" />
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 3.13a4 4 0 0 1 0 7.75" />
//                 </svg>
//                 {isSidebarOpen && <span className="ml-2">Staff</span>}
//               </li>
//               <li className="flex items-center p-2 hover:bg-gray-700 rounded-md">
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <line x1="12" x2="12" y1="2" y2="22" />
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
//                 </svg>
//                 {isSidebarOpen && <span className="ml-2">Salary</span>}
//               </li>
//               <li className="flex items-center p-2 hover:bg-gray-700 rounded-md">
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
//                   <polyline strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" points="16 17 21 12 16 7" />
//                   <line x1="21" x2="9" y1="12" y2="12" />
//                 </svg>
//                 {isSidebarOpen && <span className="ml-2">Leave</span>}
//               </li>
//               <li className="flex items-center p-2 hover:bg-gray-700 rounded-md">
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
//                   <polyline strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" points="16 17 21 12 16 7" />
//                   <line x1="21" x2="9" y1="12" y2="12" />
//                 </svg>
//                 {isSidebarOpen && <span className="ml-2">Logout</span>}
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </aside>
//       {/* Main Content */}
//       <main className="flex-1 p-6 bg-gray-100">
//         <h1 className="text-2xl font-bold">Dashboard</h1>
//         <p className="text-gray-400">Control panel</p>
//         <div className="grid gap-4 mt-6 md:grid-cols-2 lg:grid-cols-4">
//           <div className="bg-blue-500 text-white rounded-md p-4">
//             <h3 className="text-4xl font-bold">24</h3>
//             <p className="text-lg">Staff</p>
//             <button className="mt-4 text-white">More Info →</button>
//           </div>
//           <div className="bg-purple-500 text-white rounded-md p-4">
//             <h3 className="text-4xl font-bold">5</h3>
//             <p className="text-lg">Leave Requests</p>
//             <button className="mt-4 text-white">More Info →</button>
//           </div>
//           <div className="bg-red-500 text-white rounded-md p-4">
//             <h3 className="text-4xl font-bold">$39640</h3>
//             <p className="text-lg">Salary Paid</p>
//             <button className="mt-4 text-white">More Info →</button>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }


// import { useState } from 'react';

// function Dashboard() {
//   const [selectedPage, setSelectedPage] = useState('dashboard');
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   const handlePageChange = (page) => {
//     setSelectedPage(page);
//   };

//   return (
//     <div className="flex">
//       {/* Sidebar */}
//       <aside className={`w-64 bg-gray-800 text-white ${isSidebarOpen ? '' : 'hidden'}`}>
//         <div className="h-full flex flex-col">
//           <div className="h-full flex flex-col justify-between">
//             <nav className="w-full">
//               <h2 className="mb-2 text-sm font-semibold text-gray-300">Main Navigation</h2>
//               <ul className="space-y-2">
//                 <li
//                   className={`flex items-center p-2 hover:bg-gray-700 rounded-md ${
//                     selectedPage === 'dashboard' ? 'bg-gray-700' : ''
//                   }`}
//                   onClick={() => handlePageChange('dashboard')}
//                 >
//                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7V3a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4m-2 0v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7m2 0h10m0 0H7m0 0h10m-5-5v14" />
//                   </svg>
//                   {isSidebarOpen && <span className="ml-2">Dashboard</span>}
//                 </li>
//                 <li
//                   className={`flex items-center p-2 hover:bg-gray-700 rounded-md ${
//                     selectedPage === 'department' ? 'bg-gray-700' : ''
//                   }`}
//                   onClick={() => handlePageChange('department')}
//                 >
//                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//                   </svg>
//                   {isSidebarOpen && <span className="ml-2">Department</span>}
//                 </li>
//                 <li
//                   className={`flex items-center p-2 hover:bg-gray-700 rounded-md ${
//                     selectedPage === 'staff' ? 'bg-gray-700' : ''
//                   }`}
//                   onClick={() => handlePageChange('staff')}
//                 >
//                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8v8m-4-8v8m-4-8v8m-6 3h20" />
//                   </svg>
//                   {isSidebarOpen && <span className="ml-2">Staff</span>}
//                 </li>
//                 <li
//                   className={`flex items-center p-2 hover:bg-gray-700 rounded-md ${
//                     selectedPage === 'salary' ? 'bg-gray-700' : ''
//                   }`}
//                   onClick={() => handlePageChange('salary')}
//                 >
//                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 2a4 4 0 0 1 0 8c0 3.866-1.5 5.2-3 6.8C8.5 17.7 7 19 7 21h10c0-2-1.5-3.3-3-4.2-1.5-1.6-3-2.9-3-6.8a4 4 0 0 1 0-8z" />
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 2v8m0 0V2m0 8h-2m2 0h2m-4-6v8m0 0V4m0 8h2m-2 0H7" />
//                   </svg>
//                   {isSidebarOpen && <span className="ml-2">Salary</span>}
//                 </li>
//                 <li
//                   className={`flex items-center p-2 hover:bg-gray-700 rounded-md ${
//                     selectedPage === 'leave' ? 'bg-gray-700' : ''
//                   }`}
//                   onClick={() => handlePageChange('leave')}
//                 >
//                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
//                     <polyline strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" points="16 17 21 12 16 7" />
//                     <line x1="21" x2="9" y1="12" y2="12" />
//                   </svg>
//                   {isSidebarOpen && <span className="ml-2">Leave</span>}
//                 </li>
//                 <li
//                   className={`flex items-center p-2 hover:bg-gray-700 rounded-md ${
//                     selectedPage === 'logout' ? 'bg-gray-700' : ''
//                   }`}
//                   onClick={() => handlePageChange('logout')}
//                 >
//                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3v0a3 3 0 0 0 3-3V10a3 3 0 0 0-3-3z" />
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 9H9V9a3 3 0 0 1 3-3h0a3 3 0 0 1 3 3v0h-1" />
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 22H9a3 3 0 0 1-3-3v0a3 3 0 0 1 3-3h1m4 6v-1a3 3 0 0 1-3 3v0a3 3 0 0 1-3-3v-1m3-13v0a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3v0" />
//                   </svg>
//                   {isSidebarOpen && <span className="ml-2">Logout</span>}
//                 </li>
//               </ul>
//             </nav>
//           </div>
//         </div>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-6 bg-gray-100">
//         {selectedPage === 'dashboard' && (
//           <>
//             <h1 className="text-2xl font-bold">Dashboard</h1>
//             <p className="text-muted-foreground">Control panel</p>
//             <div className="grid gap-4 mt-6 md:grid-cols-2 lg:grid-cols-4">
//               <div className="bg-blue-500 text-white rounded-lg p-4">
//                 <h3 className="text-4xl font-bold">24</h3>
//                 <p className="text-lg">Staff</p>
//                 <button className="mt-4 text-white bg-transparent border border-white py-2 px-4 rounded hover:bg-white hover:text-blue-500 transition duration-300">
//                   More Info →
//                 </button>
//               </div>
//               <div className="bg-purple-500 text-white rounded-lg p-4">
//                 <h3 className="text-4xl font-bold">5</h3>
//                 <p className="text-lg">Leave Requests</p>
//                 <button className="mt-4 text-white bg-transparent border border-white py-2 px-4 rounded hover:bg-white hover:text-purple-500 transition duration-300">
//                   More Info →
//                 </button>
//               </div>
//               <div className="bg-red-500 text-white rounded-lg p-4">
//                 <h3 className="text-4xl font-bold">$39,640</h3>
//                 <p className="text-lg">Salary Paid</p>
//                 <button className="mt-4 text-white bg-transparent border border-white py-2 px-4 rounded hover:bg-white hover:text-red-500 transition duration-300">
//                   More Info →
//                 </button>
//               </div>
//             </div>
//           </>
//         )}
//         {selectedPage === 'department' && (
//           <>
//             <h1 className="text-2xl font-bold">Department</h1>
//             <p className="text-muted-foreground">Here are the details of the departments:</p>
//             <div className="grid gap-4 mt-6 md:grid-cols-2 lg:grid-cols-4">
//               <div className="bg-green-500 text-white rounded-lg p-4">
//                 <h3 className="text-4xl font-bold">Engineering</h3>
//                 <p className="text-lg">10 employees</p>
//                 <button className="mt-4 text-white bg-transparent border border-white py-2 px-4 rounded hover:bg-white hover:text-green-500 transition duration-300">
//                   More Info →
//                 </button>
//               </div>
//               <div className="bg-yellow-500 text-white rounded-lg p-4">
//                 <h3 className="text-4xl font-bold">Marketing</h3>
//                 <p className="text-lg">8 employees</p>
//                 <button className="mt-4 text-white bg-transparent border border-white py-2 px-4 rounded hover:bg-white hover:text-yellow-500 transition duration-300">
//                   More Info →
//                 </button>
//               </div>
//               <div className="bg-blue-500 text-white rounded-lg p-4">
//                 <h3 className="text-4xl font-bold">Finance</h3>
//                 <p className="text-lg">6 employees</p>
//                 <button className="mt-4 text-white bg-transparent border border-white py-2 px-4 rounded hover:bg-white hover:text-blue-500 transition duration-300">
//                   More Info →
//                 </button>
//               </div>
//               <div className="bg-pink-500 text-white rounded-lg p-4">
//                 <h3 className="text-4xl font-bold">HR</h3>
//                 <p className="text-lg">5 employees</p>
//                 <button className="mt-4 text-white bg-transparent border border-white py-2 px-4 rounded hover:bg-white hover:text-pink-500 transition duration-300">
//                   More Info →
//                 </button>
//               </div>
//             </div>
//           </>
//         )}
//         {selectedPage === 'staff' && (
//           <>
//             <h1 className="text-2xl font-bold">Staff</h1>
//             <p className="text-muted-foreground">Here are the details of the employees:</p>
//             <div className="grid gap-4 mt-6 md:grid-cols-2 lg:grid-cols-4">
//               <div className="bg-gray-500 text-white rounded-lg p-4">
//                 <h3 className="text-4xl font-bold">John Doe</h3>
//                 <p className="text-lg">Software Engineer</p>
//                 <button className="mt-4 text-white bg-transparent border border-white py-2 px-4 rounded hover:bg-white hover:text-gray-500 transition duration-300">
//                   More Info →
//                 </button>
//               </div>
//               <div className="bg-gray-500 text-white rounded-lg p-4">
//                 <h3 className="text-4xl font-bold">Jane Smith</h3>
//                 <p className="text-lg">Marketing Manager</p>
//                 <button className="mt-4 text-white bg-transparent border border-white py-2 px-4 rounded hover:bg-white hover:text-gray-500 transition duration-300">
//                   More Info →
//                 </button>
//               </div>
//               <div className="bg-gray-500 text-white rounded-lg p-4">
//                 <h3 className="text-4xl font-bold">Bob Johnson</h3>
//                 <p className="text-lg">Accountant</p>
//                 <button className="mt-4 text-white bg-transparent border border-white py-2 px-4 rounded hover:bg-white hover:text-gray-500 transition duration-300">
//                   More Info →
//                 </button>
//               </div>
//               <div className="bg-gray-500 text-white rounded-lg p-4">
//                 <h3 className="text-4xl font-bold">Sarah Lee</h3>
//                 <p className="text-lg">HR Specialist</p>
//                 <button className="mt-4 text-white bg-transparent border border-white py-2 px-4 rounded hover:bg-white hover:text-gray-500 transition duration-300">
//                   More Info →
//                 </button>
//               </div>
//             </div>
//           </>
//         )}
//         {selectedPage === 'salary' && (
//           <>
//             <h1 className="text-2xl font-bold">Salary</h1>
//             <p className="text-muted-foreground">Here are the details of the salaries:</p>
//             <div className="grid gap-4 mt-6 md:grid-cols-2 lg:grid-cols-4">
//               <div className="bg-green-500 text-white rounded-lg p-4">
//                 <h3 className="text-4xl font-bold">$5,000</h3>
//                 <p className="text-lg">John Doe</p>
//                 <button className="mt-4 text-white bg-transparent border border-white py-2 px-4 rounded hover:bg-white hover:text-green-500 transition duration-300">
//                   More Info →
//                 </button>
//               </div>
//               <div className="bg-green-500 text-white rounded-lg p-4">
//                 <h3 className="text-4xl font-bold">$6,000</h3>
//                 <p className="text-lg">Jane Smith</p>
//                 <button className="mt-4 text-white bg-transparent border border-white py-2 px-4 rounded hover:bg-white hover:text-green-500 transition duration-300">
//                   More Info →
//                 </button>
//               </div>
//               <div className="bg-green-500 text-white rounded-lg p-4">
//                 <h3 className="text-4xl font-bold">$4,500</h3>
//                 <p className="text-lg">Bob Johnson</p>
//                 <button className="mt-4 text-white bg-transparent border border-white py-2 px-4 rounded hover:bg-white hover:text-green-500 transition duration-300">
//                   More Info →
//                 </button>
//               </div>
//               <div className="bg-green-500 text-white rounded-lg p-4">
//                 <h3 className="text-4xl font-bold">$4,000</h3>
//                 <p className="text-lg">Sarah Lee</p>
//                 <button className="mt-4 text-white bg-transparent border border-white py-2 px-4 rounded hover:bg-white hover:text-green-500 transition duration-300">
//                   More Info →
//                 </button>
//               </div>
//             </div>
//           </>
//         )}
//         {selectedPage === 'leave' && (
//           <>
//             <h1 className="text-2xl font-bold">Leave</h1>
//             <p className="text-muted-foreground">Here are the details of the leave requests:</p>
//             <div className="grid gap-4 mt-6 md:grid-cols-2 lg:grid-cols-4">
//               <div className="bg-yellow-500 text-white rounded-lg p-4">
//                 <h3 className="text-4xl font-bold">John Doe</h3>
//                 <p className="text-lg">Vacation - 5 days</p>
//                 <button className="mt-4 text-white bg-transparent border border-white py-2 px-4 rounded hover:bg-white hover:text-yellow-500 transition duration-300">
//                   Approve →
//                 </button>
//               </div>
//               <div className="bg-yellow-500 text-white rounded-lg p-4">
//                 <h3 className="text-4xl font-bold">Jane Smith</h3>
//                 <p className="text-lg">Sick Leave - 3 days</p>
//                 <button className="mt-4 text-white bg-transparent border border-white py-2 px-4 rounded hover:bg-white hover:text-yellow-500 transition duration-300">
//                   Approve →
//                 </button>
//               </div>
//               <div className="bg-yellow-500 text-white rounded-lg p-4">
//                 <h3 className="text-4xl font-bold">Bob Johnson</h3>
//                 <p className="text-lg">Personal - 1 day</p>
//                 <button className="mt-4 text-white bg-transparent border border-white py-2 px-4 rounded hover:bg-white hover:text-yellow-500 transition duration-300">
//                   Approve →
//                 </button>
//               </div>
//               <div className="bg-yellow-500 text-white rounded-lg p-4">
//                 <h3 className="text-4xl font-bold">Sarah Lee</h3>
//                 <p className="text-lg">Maternity - 12 weeks</p>
//                 <button className="mt-4 text-white bg-transparent border border-white py-2 px-4 rounded hover:bg-white hover:text-yellow-500 transition duration-300">
//                   Approve →
//                 </button>
//               </div>
//             </div>
//           </>
//         )}
//         {selectedPage === 'logout' && (
//           <>
//             <h1 className="text-2xl font-bold">Logout</h1>
//             <p className="text-muted-foreground">Are you sure you want to logout?</p>
//             <div className="flex justify-center mt-6">
//               <button className="mr-4 text-white bg-red-500 py-2 px-4 rounded-lg hover:bg-white hover:text-red-500 transition duration-300">
//                 Logout
//               </button>
//               <button className="text-white bg-gray-500 py-2 px-4 rounded-lg hover:bg-white hover:text-gray-500 transition duration-300">
//                 Cancel
//               </button>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Dashboard;
import React, { useState } from 'react';

export default function AdminPanel() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedPage, setSelectedPage] = useState('dashboard');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handlePageChange = (page) => {
    setSelectedPage(page);
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className={`${isSidebarOpen ? "w-64" : "w-16"} bg-gray-800 text-white transition-all duration-300`}>
        <div className="flex items-center justify-between p-4">
          <h1 className="text-lg font-bold">{isSidebarOpen ? "Employee Management" : "EM"}</h1>
          <button className="text-white focus:outline-none" onClick={toggleSidebar}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-center p-4">
          <div className="flex items-center mb-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            {isSidebarOpen && <span className="ml-2 text-lg font-semibold">Administrator</span>}
          </div>
          <div className="relative w-full mb-4">
            <input
              type="search"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 bg-gray-700 text-white rounded-md w-full"
            />
            <svg className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <circle cx="11" cy="11" r="8" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m21 21-4.3-4.3" />
            </svg>
          </div>
          <nav className="w-full">
            <h2 className="mb-2 text-sm font-semibold text-gray-400">Main Navigation</h2>
            <ul className="space-y-2">
              <li
                className={`flex items-center p-2 hover:bg-gray-700 rounded-md ${
                  selectedPage === 'dashboard' ? 'bg-gray-700' : ''
                }`}
                onClick={() => handlePageChange('dashboard')}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7V3a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4m-2 0v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7m2 0h10m0 0H7m0 0h10m-5-5v14" />
                </svg>
                {isSidebarOpen && <span className="ml-2">Dashboard</span>}
              </li>
              <li
                className={`flex items-center p-2 hover:bg-gray-700 rounded-md ${
                  selectedPage === 'department' ? 'bg-gray-700' : ''
                }`}
                onClick={() => handlePageChange('department')}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 22v-4h6v4" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 6h.01" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 6h.01" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6h.01" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10h.01" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14h.01" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 10h.01" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 14h.01" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14h.01" />
                </svg>
                {isSidebarOpen && <span className="ml-2">Department</span>}
              </li>
              <li
                className={`flex items-center p-2 hover:bg-gray-700 rounded-md ${
                  selectedPage === 'staff' ? 'bg-gray-700' : ''
                }`}
                onClick={() => handlePageChange('staff')}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                {isSidebarOpen && <span className="ml-2">Staff</span>}
              </li>
              <li
                className={`flex items-center p-2 hover:bg-gray-700 rounded-md ${
                  selectedPage === 'salary' ? 'bg-gray-700' : ''
                }`}
                onClick={() => handlePageChange('salary')}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <line x1="12" x2="12" y1="2" y2="22" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
                {isSidebarOpen && <span className="ml-2">Salary</span>}
              </li>
              <li
                className={`flex items-center p-2 hover:bg-gray-700 rounded-md ${
                  selectedPage === 'leave' ? 'bg-gray-700' : ''
                }`}
                onClick={() => handlePageChange('leave')}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                  <polyline strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" points="16 17 21 12 16 7" />
                  <line x1="21" x2="9" y1="12" y2="12" />
                </svg>
                {isSidebarOpen && <span className="ml-2">Leave</span>}
              </li>
              <li
                className={`flex items-center p-2 hover:bg-gray-700 rounded-md ${
                  selectedPage === 'logout' ? 'bg-gray-700' : ''
                }`}
                onClick={() => handlePageChange('logout')}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                  <polyline strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" points="16 17 21 12 16 7" />
                  <line x1="21" x2="9" y1="12" y2="12" />
                </svg>
                {isSidebarOpen && <span className="ml-2">Logout</span>}
              </li>
            </ul>
          </nav>
        </div>
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">
        {selectedPage === 'dashboard' && (
          <>
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p className="text-gray-400">Control panel</p>
            <div className="grid gap-4 mt-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="bg-blue-500 text-white rounded-md p-4">
                <h3 className="text-4xl font-bold">24</h3>
                <p className="text-lg">Staff</p>
                <button className="mt-4 text-white">More Info →</button>
              </div>
              <div className="bg-purple-500 text-white rounded-md p-4">
                <h3 className="text-4xl font-bold">5</h3>
                <p className="text-lg">Leave Requests</p>
                <button className="mt-4 text-white">More Info →</button>
              </div>
              <div className="bg-red-500 text-white rounded-md p-4">
                <h3 className="text-4xl font-bold">$39640</h3>
                <p className="text-lg">Salary Paid</p>
                <button className="mt-4 text-white">More Info →</button>
              </div>
            </div>
          </>
        )}

        {selectedPage === 'department' && (
          <>
            <h1 className="text-2xl font-bold">Department</h1>
            <p className="text-muted-foreground">Control panel</p>
          </>
        )}

        {selectedPage === 'staff' && (
          <>
            <h1 className="text-2xl font-bold">Staff</h1>
            <p className="text-muted-foreground">Control panel</p>
          </>
        )}

        {selectedPage === 'salary' && (
          <>
            <h1 className="text-2xl font-bold">Salary</h1>
            <p className="text-muted-foreground">Control panel</p>
          </>
        )}

        {selectedPage === 'leave' && (
          <>
            <h1 className="text-2xl font-bold">Leave</h1>
            <p className="text-muted-foreground">Control panel</p>
          </>
        )}

        {selectedPage === 'logout' && (
          <>
            <h1 className="text-2xl font-bold">Logout</h1>
            <p className="text-muted-foreground">Control panel</p>
          </>
        )}
      </main>
    </div>
  );
}
