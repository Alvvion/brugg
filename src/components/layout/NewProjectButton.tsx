"use client";

import { useProjectContext } from "@/contexts/projectContext";
import { PlusIcon } from "@heroicons/react/20/solid";

function NewProjectButton({
  fixed = true,
  hidden = false,
}: {
  fixed?: boolean;
  hidden?: boolean;
}) {
  const { setNewProjectOpen: setOpen } = useProjectContext();
  return (
    <button
      type="button"
      className={`items-center rounded-md bg-indigo-600 px-4 py-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
        fixed ? "fixed bottom-10 right-10" : ""
      } ${hidden ? "hidden" : "inline-flex"}`}
      onClick={() => setOpen((prev) => !prev)}
    >
      <PlusIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
      New Project
    </button>
  );
}
export default NewProjectButton;
