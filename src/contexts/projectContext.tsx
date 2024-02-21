"use client";

import useProjectState, { ProjectContextType } from "@/hooks/useProjectState";
import contextFactory from "./contextFactory";

const { Provider, useContext } = contextFactory<ProjectContextType>(
  {
    newProjectOpen: false,
    sidebarOpen: false,
    setNewProjectOpen: () => undefined,
    setSidebarOpen: () => undefined,
    navigation: [],
    teams: [],
  },
  useProjectState
);

export { Provider as ProjectProvider, useContext as useProjectContext };
