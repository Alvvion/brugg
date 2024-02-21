import ProjectCard from "@/components/project/ProjectCard";
import { GET } from "@/app/api/project/route";
import EmptyProject from "@/components/project/EmptyProject";
import NewProjectButton from "@/components/layout/NewProjectButton";

export type ProjectType = {
  projectCode: string;
  projectName: string;
  startDate: string;
  deadline: string;
  location: string;
};

export default async function Project() {
  try {
    const data = await GET();
    const projects: ProjectType[] = await data.json();
    if (projects.length === 0) {
      return <EmptyProject />;
    }
    return (
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8 relative"
      >
        <NewProjectButton />
        {projects.map((project) => (
          <ProjectCard project={project} key={project.projectCode} />
        ))}
      </ul>
    );
  } catch (error) {
    console.error(error);
  }
}
