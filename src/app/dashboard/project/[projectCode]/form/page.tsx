import TimesheetForm from "@/components/projectForm/TimesheetForm";
import { getSession } from "@/lib/auth";
import { UserType } from "../../../page";

export default async function AddTimesheet({
  params,
}: {
  params: { projectCode: string };
}) {
  const user: UserType = await getSession();
  return <TimesheetForm user={user} projectCode={params.projectCode} />;
}
