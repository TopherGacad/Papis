// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
// } from "react-router-dom";

// import Home from "./components/Home";
// import More from "./components/More";
// import RootLayout from "./components/RootLayout";
// import About from "./components/About";

// export const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/">
//       <Route path="/" element={<RootLayout />}>
//         <Route path="home" element={<Home />}>
//           <Route path="details" />
//         </Route>
//         <Route path="about" element={<About />}>
//           <Route path="details" element={<Home />} />
//           <Route path="more" element={<More />} />
//         </Route>
//       </Route>
//       <Route path="new-page" element={<h1>New Page</h1>} />
//     </Route>
//   )
// );

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import RootLayout from "./components/RootLayout";
import Login from "./components/Login";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route element={<RootLayout />}>
        <Route path="Content" element={<Content />}></Route>
      </Route>
      <Route path="login" element={<Login />} />
    </Route>
  )
);
