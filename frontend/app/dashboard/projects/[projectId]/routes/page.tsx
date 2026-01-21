import RoutesPage from "@/components/routes/page";

type Params = {
  projectId: string;
};

 type Route = {
  id: string;
  method: string;
  path: string;
  authRequired: boolean;
  cacheEnabled: boolean;
  ttl?: number;
};

export default async function Routes(context: { params: Promise<Params> }){
    const {projectId}=await context.params;
    const routes: Route[] = []; // Placeholder for routes data
    return(
        <>
        <RoutesPage projectId={projectId} routes={routes} />
        </>
    )
}