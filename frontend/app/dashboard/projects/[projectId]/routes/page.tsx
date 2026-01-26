import RoutesPage from "@/components/routes/page";
import { NEXT_AUTH_CONFIG } from "@/lib/auth";
import { getServerSession, Session } from "next-auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

type Params = {
  projectId: string;
};

 type Route = {
  _id: string;
  method: string;
  path: string;
  authRequired: boolean;
  cacheEnabled: boolean;
  ttl?: number;
};

export default async function Routes(context: { params: Promise<Params> }){
    const {projectId}=await context.params;
    const session = await getServerSession(NEXT_AUTH_CONFIG);
    console.log("Session fetched in project page:", session);
    if (!session || session.error === "RefreshAccessTokenError") {
        redirect("/login");
    }
    
    console.log("Session in project page:", session);
    //const routes: Route[] = []; // Placeholder for routes data
    
    const Routes = await fetchRoutes(projectId,session);
    
    const routes : Route[]=[...Routes]
    
    console.log("Fetched Routes:", Routes);
    return(
        <>
        <RoutesPage projectId={projectId} routes={routes} />
        </>
    )
}

async function fetchRoutes(projectId: string, session: Session) {
  const cookie = (await headers()).get("cookie");

  const res = await fetch(
    `${process.env.NEXTAUTH_URL}api/project/${projectId}/routes`,
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

  console.log("Routes fetch response:", data);

  if (res.status === 401) {
    redirect("/login");
    //throw new Error("Unauthorized");
  }

  if (!res.ok) {
    throw new Error("Routes fetch failed");
  }

  if (!data?.Routes) {
    throw new Error("Malformed API response");
  }

  return data.Routes;
}
