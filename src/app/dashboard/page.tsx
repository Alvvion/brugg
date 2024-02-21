import ProjectCard from "@/components/project/ProjectCard";
import EmptyProject from "@/components/project/EmptyProject";
import NewProjectButton from "@/components/layout/NewProjectButton";
import { getProject, getUser } from "@/lib/auth";
import { UserSessionType } from "./layout";

export type ProjectType = {
  projectCode: string;
  projectName: string;
  startDate: string;
  deadline: string;
  location: string;
};

export default async function Project() {
  const projects: ProjectType[] = await getProject();
  const user: UserSessionType = await getUser();
  if (projects.length === 0) {
    return <EmptyProject hidden={user.role === "Jointer"} />;
  }
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8 relative"
    >
      <NewProjectButton hidden={user.role === "Jointer"} />
      {projects.map((project) => (
        <ProjectCard project={project} key={project.projectCode} />
      ))}
    </ul>
  );
}
