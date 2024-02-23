import ProjectCard from "@/components/project/ProjectCard";
import EmptyProject from "@/components/project/EmptyProject";
import NewProjectButton from "@/components/layout/NewProjectButton";
import { getProjects, getSession } from "@/lib/auth";

export type ProjectType = {
  projectCode: string;
  projectName: string;
  startDate: string;
  deadline: string;
  location: string;
  jointers: { _id: string }[];
  issuedBy: {
    _id: string;
    email: string;
    role: string;
  };
};

export type UserType = {
  _id: string;
  email: string;
  role: string;
  name: string;
};

export default async function Project() {
  const user: UserType = await getSession();
  const projects: ProjectType[] = await getProjects(user?._id);
  if (projects.length === 0) {
    return <EmptyProject hidden={user?.role === "Jointer"} />;
  }
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8 relative"
    >
      <NewProjectButton hidden={user?.role === "Jointer"} />
      {projects?.map((project) => (
        <ProjectCard project={project} key={project?.projectCode} user={user} />
      ))}
    </ul>
  );
}
