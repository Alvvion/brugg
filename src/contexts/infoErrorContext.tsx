"use client";

import useInfoErrorState, {
  InfoErrorContextType,
} from "@/hooks/useInfoErrorState";
import contextFactory from "./contextFactory";

const { Provider, useContext } = contextFactory<InfoErrorContextType>(
  {
    error: { open: false, message: "", action: () => undefined, desc: "" },
    setError: () => undefined,
    info: { open: false, message: "", action: () => undefined },
    setInfo: () => undefined,
  },
  useInfoErrorState
);

export { Provider as InfoErrorProvider, useContext as useInfoErrorContext };
