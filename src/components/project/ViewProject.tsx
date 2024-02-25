import { UserSessionType } from "@/app/dashboard/layout";
import { ProjectType } from "@/app/dashboard/page";
import { getTimesheets, getUserById } from "@/lib/auth";
import { TimesheetFeild } from "../projectForm/TimesheetForm";

export type ViewTimesheetFeild = TimesheetFeild & { _id: string };

export default async function ViewProject({
  project,
}: {
  project: ProjectType;
}) {
  const timesheets: ViewTimesheetFeild[] = await getTimesheets(
    project?.projectCode
  );
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Timesheet
          </h1>
          {/* <p className="mt-2 text-sm text-gray-700">
            A table of placeholder stock market data that does not make any
            sense.
          </p> */}
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Export
          </button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Jointer's Name
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Start Time
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    End Time
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Action
                  </th>
                  <th
                    scope="col"
                    className="relative whitespace-nowrap py-3.5 pl-3 pr-4 sm:pr-0"
                  >
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {timesheets.map((timesheet, index) => {
                  return (
                    <tr key={timesheet?._id}>
                      <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500 sm:pl-0">
                        22-02-2024
                      </td>
                      <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                        {timesheet?.jointer}
                      </td>
                      <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                        {timesheet?.startTime}
                      </td>
                      <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                        {timesheet?.endTime}
                      </td>
                      <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                        {timesheet?.actions}
                      </td>

                      <td className="relative whitespace-nowrap py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                        <a
                          href="#"
                          className="text-indigo-600 hover:text-indigo-900 mr-5"
                        >
                          Approve
                          <span className="sr-only">, {timesheet?._id}</span>
                        </a>
                        <a
                          href="#"
                          className="text-indigo-600 hover:text-indigo-900 ml-5"
                        >
                          Disapprove
                          <span className="sr-only">, {timesheet?._id}</span>
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
