"use server";

import DashboardPage from "@/components/dashboard/page";
import { NEXT_AUTH_CONFIG } from "@/lib/auth";
import { getServerSession, Session } from "next-auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import DashboardClient from "./dashboardclient";

export default async function () {
  //check auth

  const session: Session | null = await getServerSession(NEXT_AUTH_CONFIG);
  if (!session || session.error === "RefreshAccessTokenError") {
    // Redirect to login if not authenticated
    redirect("/login");
  }
  // console.log("TOKEN RESPONSE", await tokenResponse.json());
  //also fetch projects data
  const projects = [];
  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/project`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${session.token}`,
      cookie: (await headers()).get("cookie") ?? "",
    },
  });

  if (!response.ok) {
    const text = await response.text();
    redirect("/login");
  }

  const data = await response.json();

  projects.push(...data.projects);
  projects.sort(sortaccordingdate);
  function sortaccordingdate(
    a: { createdAt: string },
    b: { createdAt: string },
  ) {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  }
  return (
    <>
      <DashboardClient>
        <DashboardPage session={session} projects={projects} />
      </DashboardClient>
    </>
  );
}
