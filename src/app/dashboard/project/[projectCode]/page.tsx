import ProjectHeading from "@/components/project/ProjectHeading";
import ViewProject from "@/components/project/ViewProject";
import { getProject } from "@/lib/auth";
import { ProjectType } from "../../page";

async function ProjectPage({
  params: { projectCode },
}: {
  params: { projectCode: string };
}) {
  const project: ProjectType = await getProject(projectCode);

  return (
    <>
      <ProjectHeading project={project} />
      <ViewProject project={project} />
    </>
  );
}
export default ProjectPage;
