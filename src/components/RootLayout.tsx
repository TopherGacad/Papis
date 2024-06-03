// import React from "react";
// import { Outlet } from "react-router-dom";   
// import Navbar from "./Navbar";

// export default function RootLayout() {
//   return (
//     <div>
//       {/* NAVBAR */}
//       <div style={{ border: "1px solid green" }}>
//         <Navbar />
//       </div>

//       <div style={{ display: "flex" }}>
//         {/* SIDEBAR */}
//         <div
//           style={{ width: "250px", border: "1px solid red", height: "100vh" }}
//         >
//           Sidebar
//         </div>
//         {/* MAIN */}

//         <div style={{ border: "1px solid blue", width: "100%" }}>
//   <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// }

import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Content from "./Content";

function RootLayout() {
  return (
    <div className="flex p-3 h-screen w-screen bg-gray-200" >
      <div className="border-solid border-green-600">
        <Sidebar />
      </div>
      <div className="flex-grow border-solid border-blue-600">
        <Outlet />
      </div>
    </div>
  );
}

export default RootLayout;
