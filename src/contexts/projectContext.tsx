import useProjectState from "@/hooks/useProjectState";
import contextFactory from "./contextFactory";

const { Provider, useContext } = contextFactory(
  { newProjectOpen: false, setNewProjectOpen: () => undefined },
  useProjectState
);

export { Provider as ProjectProvider, useContext as useProjectContext };
