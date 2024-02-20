import contextFactory from "./contextFactory";
import useSessionState from "@/hooks/useSessionState";

const { Provider, useContext } = contextFactory(
  { session: "" },
  useSessionState
);

export { Provider as SessionProvider, useContext as useSessionContext };
