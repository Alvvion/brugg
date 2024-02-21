"use client";

import useLoginState, { LoginContextType } from "@/hooks/useLoginState";
import contextFactory from "./contextFactory";

const { Provider, useContext } = contextFactory<LoginContextType>(
  { error: "", setError: () => undefined },
  useLoginState
);

export { Provider as LoginProvider, useContext as useLoginContext };
