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
import Rightbar from "./Rightbar";

export default function RootLayout() {
  return (
    <div className="flex p-3 px-2 h-screen bg-[#f2f2f2]">
      <div className="border-solid">
        <Sidebar />
      </div>
      <div className="border-solid flex-grow">
        <Outlet />
      </div>
      <div className="border-solid">
        <Rightbar />
      </div>
    </div>
  );
}
