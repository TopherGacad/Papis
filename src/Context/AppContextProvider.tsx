import { createContext, useContext, useState } from "react";

const AppContext = createContext({});

import React from "react";

export default function AppContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showModal, setShowModal] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <AppContext.Provider
      value={{ showModal, setShowModal, showLogin, setShowLogin }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => {
  return useContext(AppContext);
};
