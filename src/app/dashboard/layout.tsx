import DashboardTransition from "@/components/layout/DashboardTransition";
import DashboardMobile from "@/components/layout/DashboardMobile";
import NewProjectButton from "@/components/layout/NewProjectButton";
import { ProjectProvider } from "@/contexts/projectContext";
import DashboardDesktop from "@/components/layout/DashboardDesktop";
import NewProject from "@/components/layout/NewProject";
import { getUser } from "@/lib/auth";

export type UserSessionType = {
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
  return (
    <ProjectProvider>
      <div>
        <NewProject />
        <DashboardTransition />
        <DashboardDesktop user={user} />
        <DashboardMobile />

        <main className="py-10 lg:pl-72">
          <div className="px-4 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </ProjectProvider>
  );
}

// useEffect(() => {
//   (async () => {
//     const session = await getSession();
//     const user = await decrypt(session!);
//     console.log(user);
//   })();
// }, []);
