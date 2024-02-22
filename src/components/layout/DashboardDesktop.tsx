"use client";

import Image from "next/image";
import logo from "@/assests/brugg-logo-1.png";
import { useProjectContext } from "@/contexts/projectContext";
import { UserSessionType } from "@/app/dashboard/layout";
import ProfileOptions from "./ProfileOptions";
import { UserCircleIcon } from "@heroicons/react/24/outline";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function DashboardDesktop({ user }: { user: UserSessionType }) {
  const { navigation } = useProjectContext();
  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
        <div className="flex h-16 shrink-0 items-center mt-10">
          <Image src={logo} alt="Your Company" width={200} height={100} />
        </div>
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-50 text-indigo-600"
                          : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
                        "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                      )}
                    >
                      <item.icon
                        className={classNames(
                          item.current
                            ? "text-indigo-600"
                            : "text-gray-400 group-hover:text-indigo-600",
                          "h-6 w-6 shrink-0"
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </li>

            <li className="mx-3 mt-auto mb-10">
              <ProfileOptions>
                {user?.image ? (
                  <div className="h-8 w-8 rounded-full bg-gray-50 relative">
                    <Image
                      src={user?.image}
                      fill
                      alt=""
                      className="rounded-full"
                    />
                  </div>
                ) : (
                  <UserCircleIcon
                    className="h-8 w-8 text-gray-500 fill-slate-200"
                    aria-hidden="true"
                  />
                )}
                <span className="sr-only">Your profile</span>
                <span aria-hidden="true">
                  {user?.firstName} {user?.lastName}
                </span>
              </ProfileOptions>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
export default DashboardDesktop;
