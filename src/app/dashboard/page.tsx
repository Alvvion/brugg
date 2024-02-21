"use client";

import useSWR from "swr";
import ProjectCard from "@/components/project/ProjectCard";
import EmptyProject from "@/components/project/EmptyProject";
import NewProjectButton from "@/components/layout/NewProjectButton";
import { fetcher } from "@/lib/auth";

export type ProjectType = {
  projectCode: string;
  projectName: string;
  startDate: string;
  deadline: string;
  location: string;
};

export default async function Project() {
  const { data: projects, error } = useSWR<ProjectType[]>("dashboard", fetcher);

  if (!projects) {
    return <p>Loading</p>;
  }

  if (error) {
    return <p>Error occured</p>;
  }

  if (projects.length === 0) {
    return <EmptyProject hidden={false} />;
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
}
