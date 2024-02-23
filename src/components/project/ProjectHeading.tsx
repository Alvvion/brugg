import { ProjectType } from "@/app/dashboard/page";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function ProjectHeading({ project }: { project: ProjectType }) {
  return (
    <div className="mb-10">
      <div>
        <nav className="sm:hidden" aria-label="Back">
          <a
            href="#"
            className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
          >
            <ChevronLeftIcon
              className="-ml-1 mr-1 h-5 w-5 flex-shrink-0 text-gray-400"
              aria-hidden="true"
            />
            Back
          </a>
        </nav>
        <nav className="hidden sm:flex" aria-label="Breadcrumb">
          <ol role="list" className="flex items-center space-x-4">
            <li>
              <div className="flex">
                <Link
                  href="/dashboard"
                  className="text-sm font-medium text-gray-500 hover:text-gray-700"
                >
                  Project
                </Link>
              </div>
            </li>

            <li>
              <div className="flex items-center">
                <ChevronRightIcon
                  className="h-5 w-5 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
                <Link
                  href="#"
                  aria-current="page"
                  className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                >
                  {project?.projectCode}
                </Link>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      <div className="mt-2 md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            {project?.projectName}
          </h2>
          <p className="mt-2 text-sm text-gray-700">
            Project started on {project?.startDate}
          </p>
          <p className="mt-2 text-sm text-gray-700">
            Project deadline on {project?.deadline}
          </p>
        </div>
        <div className="mt-4 flex flex-shrink-0 md:ml-4 md:mt-0">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            Edit Project
          </button>
        </div>
      </div>
    </div>
  );
}
