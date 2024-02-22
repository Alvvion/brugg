"use client";

import { ProjectType } from "@/app/dashboard/page";
import { Menu, Transition } from "@headlessui/react";
import { EllipsisHorizontalIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function ProjectCard({ project }: { project: ProjectType }) {
  return (
    <li className="overflow-hidden rounded-xl border-2 border-gray-200 shadow-2xl">
      <div className="flex items-center gap-x-4 border-b-4 border-gray-900/5 bg-gray-50 p-6">
        <div className="text-sm font-medium leading-6 text-gray-900">
          {project.projectCode}
        </div>
        <div className="text-sm font-medium leading-6 text-gray-900">
          {project.projectName}
        </div>
        <Menu as="div" className="relative ml-auto">
          <Menu.Button className="-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500">
            <span className="sr-only">Open options</span>
            <EllipsisHorizontalIcon className="h-5 w-5" aria-hidden="true" />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-50" : "",
                      "block px-3 py-1 text-sm leading-6 text-gray-900"
                    )}
                  >
                    View
                    <span className="sr-only">, {project.projectName}</span>
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-50" : "",
                      "block px-3 py-1 text-sm leading-6 text-gray-900"
                    )}
                  >
                    Edit
                    <span className="sr-only">, {project.projectCode}</span>
                  </a>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
        <div className="flex justify-between gap-x-4">
          <dt className="text-gray-500">Start date</dt>
          <dd className="text-gray-700">
            <time dateTime={project.startDate}>{project.startDate}</time>
          </dd>
        </div>
        <div className="flex justify-between gap-x-4">
          <dt className="text-gray-500">Deadline</dt>
          <dd className="flex items-start gap-x-2">
            <div className="font-medium text-gray-900">{project.deadline}</div>
          </dd>
        </div>
        <div className="flex justify-between gap-x-4">
          <dt className="text-gray-500">Location</dt>
          <dd className="flex items-start gap-x-2">
            <div className="font-medium text-gray-900">{project.location}</div>
          </dd>
        </div>
      </dl>
    </li>
  );
}
export default ProjectCard;
