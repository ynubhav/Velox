import { ApiKeysPage } from "@/components/api-keys/page";

import { headers } from "next/headers";
import { getServerSession, Session } from "next-auth";
import { NEXT_AUTH_CONFIG } from "@/lib/auth";
import { redirect } from "next/navigation";

type Params = {
  projectId: string;
};

export default async function ApiKey(context: { params: Promise<Params> }) {
  const session = await getServerSession(NEXT_AUTH_CONFIG);
  console.log("Session fetched in project page:", session);
  if (!session || session.error === "RefreshAccessTokenError") {
    redirect("/login");
  }

  console.log("Session in project page:", session);
  const { projectId } = await context.params;

  const keys = await fetchKeys(projectId, session);

  console.log("Fetched project:", keys);

  return (
    <>
      <ApiKeysPage projectId={projectId} apiKeys={keys} />
    </>
  );
}

async function fetchKeys(projectId: string, session: Session) {
  
  const cookie = (await headers()).get("cookie");

  console.log(`${process.env.NEXTAUTH_URL}api/api_key/project/${projectId}`)
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}api/api_key/project/${projectId}`,
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

  if (!res.ok)
  {
    throw new Error("Project fetch failed");
  }

  if (res.status === 401) {
    redirect("/login");
    //throw new Error("Unauthorized");
  }

  const data = await res.json();
  console.log("keys fetch response:", data);
  
  if (!data?.keys) {
    throw new Error("Malformed API response");
  }

  return data.keys;
}
