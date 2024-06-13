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
import { useState } from "react";
import { useAppContext } from "../Context/AppContextProvider";

export default function RootLayout() {
  // const [setModal, setSetModal] = useState(false);
  return (
    <div className="flex flex-row p-3 px-2 h-screen bg-[#f2f2f2] font-sans">
      {/* 
      <div
        className={`${
          setModal ? "w-100" : "w-0 overflow-hidden"
        } border border-red-500  bg-[rgba(0,0,0,0.2)] duration-[1s]`}
      >
        <h1>I am modal</h1>
        <button onClick={() => setSetModal((prevState) => !prevState)}>
          Close modal
        </button>
      </div>
      */}

      {/* <button onClick={() => setSetModal((prevState) => !prevState)}>
        Show modal
      </button> */}

      <div className="w-[28%]">
        <Sidebar />
      </div>
      <div className="flex-grow mx-[10px]">
        <Outlet />
      </div>
      <div className="overflow-hidden">
        <Rightbar />
      </div>
    </div>
  );
}
