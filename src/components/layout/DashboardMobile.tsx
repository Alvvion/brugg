"use client";

import { UserSessionType } from "@/app/dashboard/layout";
import { useProjectContext } from "@/contexts/projectContext";
import { Bars3Icon, UserCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

function DashboardMobile({ user }: { user: UserSessionType }) {
  const { setSidebarOpen } = useProjectContext();
  return (
    <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 lg:hidden">
      <button
        type="button"
        className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
        onClick={() => setSidebarOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
      </button>
      <div className="flex-1 text-sm font-semibold leading-6 text-gray-900">
        Dashboard
      </div>
      <a href="#">
        <span className="sr-only">Your profile</span>
        {user?.image ? (
          <div className="h-8 w-8 rounded-full bg-gray-50 relative">
            <Image src={user?.image} fill alt="" className="rounded-full" />
          </div>
        ) : (
          <UserCircleIcon
            className="h-8 w-8 text-gray-500 fill-slate-200"
            aria-hidden="true"
          />
        )}
      </a>
    </div>
  );
}
export default DashboardMobile;
