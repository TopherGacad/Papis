// import { router } from "./Router";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

// ROUTER
import { RouterProvider } from "react-router-dom";
import { router } from "./Router";

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      {/* <Navbar></Navbar> */}
      {/* <div className="flex">

      </div> */}
    </>
  );
};

export default App;
