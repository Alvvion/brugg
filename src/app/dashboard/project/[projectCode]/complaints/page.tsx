import { ProjectType } from "@/app/dashboard/page";
import ProjectHeading from "@/components/project/ProjectHeading";
import ViewComplaints from "@/components/project/ViewComplaints";
import { getProject } from "@/lib/auth";

async function page({
  params: { projectCode },
}: {
  params: { projectCode: string };
}) {
  const project: ProjectType = await getProject(projectCode);
  return (
    <>
      <ProjectHeading project={project} />
      <ViewComplaints project={project} />
    </>
  );
}
export default page;
