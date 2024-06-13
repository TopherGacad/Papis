// import { router } from "./Router";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

// ROUTER
import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import AppContextProvider, {
  useAppContext,
} from "./Context/AppContextProvider";

const App = () => {
  return (
    <>
      <AppContextProvider>
        <RouterProvider router={router} />
      </AppContextProvider>
    </>
  );
};

export default App;
