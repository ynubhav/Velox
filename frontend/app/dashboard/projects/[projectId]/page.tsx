import { headers } from "next/headers";
import ProjectPage from "@/components/projects/landproject";
import { getServerSession, Session } from "next-auth";
import { NEXT_AUTH_CONFIG } from "@/lib/auth";
import { redirect } from "next/navigation";
import DashboardClient from "./projectpageclient";

type Params = {
  projectId: string;
};

export default async function Page(context: { params: Promise<Params> }) {
  const session = await getServerSession(NEXT_AUTH_CONFIG);
  console.log("Session fetched in project page:", session);
  if (!session || session.error === "RefreshAccessTokenError") {
    redirect("/login");
  }

  console.log("Session in project page:", session);
  const { projectId } = await context.params;

  const project = await fetchProject(projectId,session);
  console.log("Fetched project:", project);

  return (
    <DashboardClient>
      <ProjectPage projectId={projectId} project={project} />
    </DashboardClient>
  );
}

async function fetchProject(projectId: string, session: Session) {
  const cookie = (await headers()).get("cookie");

  const res = await fetch(
    `${process.env.NEXTAUTH_URL}api/project/${projectId}`,
    {
      method: "GET",
      headers: {
        cookie: cookie ?? "",
        "Content-Type": "application/json",
        authorization: `${session?.token}`,
      },
      cache: "no-store",
    },
  );

  const data = await res.json();

  console.log("Project fetch response:", data);

  if (res.status === 401) {
    redirect("/login");
    //throw new Error("Unauthorized");
  }

  if (!res.ok) {
    throw new Error("Project fetch failed");
  }

  if (!data?.ProjectInfo) {
    throw new Error("Malformed API response");
  }

  return data.ProjectInfo;
}
