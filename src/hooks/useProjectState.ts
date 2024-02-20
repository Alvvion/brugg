import { useState } from "react";

const useProjectState = (): {
  newProjectOpen: boolean;
  setNewProjectOpen: React.Dispatch<React.SetStateAction<boolean>>;
} => {
  const [newProjectOpen, setNewProjectOpen] = useState<boolean>(false);
  return {
    newProjectOpen,
    setNewProjectOpen,
  };
};

export default useProjectState;
