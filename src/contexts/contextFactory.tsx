"use client";

import { createContext, useContext } from "react";

type ContextFactory = <T>(
  initialContextState: T,
  useContextState: () => T
) => {
  Provider: React.FC<{ children: React.ReactNode }>;
  useContext: () => T;
};

const contextFactory: ContextFactory = (
  initialContextState,
  useContextState
) => {
  const Context = createContext(initialContextState);

  const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <Context.Provider value={useContextState()}>{children}</Context.Provider>
  );

  return { Provider, useContext: () => useContext(Context) };
};

export default contextFactory;
