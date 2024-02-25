import DashboardTransition from "@/components/layout/DashboardTransition";
import DashboardMobile from "@/components/layout/DashboardMobile";
import NewProjectButton from "@/components/layout/NewProjectButton";
import { ProjectProvider } from "@/contexts/projectContext";
import DashboardDesktop from "@/components/layout/DashboardDesktop";
import NewProject from "@/components/layout/NewProject";
import { getUser, getUsers } from "@/lib/auth";
export type UserSessionType = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  image: string;
};

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user: UserSessionType = await getUser();
  let users: UserSessionType[] = await getUsers();
  // let users: UserSessionType[] = await res.json();
  users = users?.filter((user) => user.role !== "Project Manager");

  return (
    <ProjectProvider>
      <div>
        <NewProject users={users} />
        <DashboardTransition />
        <DashboardDesktop user={user} />
        <DashboardMobile user={user} />

        <main className="py-10 lg:pl-72">
          <div className="px-4 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </ProjectProvider>
  );
}
