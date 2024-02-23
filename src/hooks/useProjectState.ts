import { FolderIcon, UsersIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export type ProjectContextType = {
  newProjectOpen: boolean;
  sidebarOpen: boolean;
  setNewProjectOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  navigation: {
    name: string;
    href: string;
    current: boolean;
    icon: React.ForwardRefExoticComponent<
      Omit<React.SVGProps<SVGSVGElement>, "ref">
    >;
  }[];
  teams: {
    id: number;
    name: string;
    href: string;
    initial: string;
    current: boolean;
  }[];
};

const useProjectState = (): ProjectContextType => {
  const [newProjectOpen, setNewProjectOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigation = [
    {
      name: "Projects",
      href: "/dashboard",
      icon: FolderIcon,
      current: true,
    },
    { name: "Team", href: "#", icon: UsersIcon, current: false },
    // Add more here if you want to
  ];
  const teams = [
    { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
    { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
    { id: 3, name: "Workcation", href: "#", initial: "W", current: false },
  ];
  return {
    newProjectOpen,
    sidebarOpen,
    setNewProjectOpen,
    setSidebarOpen,
    teams,
    navigation,
  };
};

export default useProjectState;
