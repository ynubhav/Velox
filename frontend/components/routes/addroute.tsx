import { isValidRoutePath } from "@/lib/validroutepath";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

type Method = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

type CacheTTL = 30 | 60 | 120 | 180;

type Route = {
  path: string;
  method: Method;
  authRequired: boolean;
  cacheEnabled: boolean;
  cacheTTL: CacheTTL;
  description: string;
};

export function AddRouteSection(props:{projectId:String}) {

  const router= useRouter();

  const [route, setRoute] = useState<Route>({
    path: "",
    method: "GET",
    authRequired: true,
    cacheEnabled: false,
    cacheTTL: 60,
    description: "",
  });

  const handlecreateRoute= async () => {
    // validate empty or not
    if((!isValidRoutePath(route.path)))
    {
      toast.error("Invalid Route Path");
      return;
    }
    if((route.authRequired==true&&route.cacheEnabled==true))
    {
      toast.error("Auth-Route should not be cached")
      return;
    }

    const id = toast.loading('Adding Route');
    const response = await fetch(`/api/project/${props.projectId}/route`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(route),
  });

  if(!response.ok)
  {
    toast.dismiss();
    toast.error('Could Not Add Route');
    return;
  }

  const data= await response.json();
  toast.dismiss();
  router.refresh();
  toast.success(`${data.message}`)

  }


  return (
    <section className="border rounded-lg p-6 space-y-4 bg-slate-50">
      <h2 className="font-medium text-slate-900">Add New Route</h2>

      <div className="grid grid-cols-2 gap-4 max-w-3xl">
        {/* METHOD */}
        <select
          value={route.method}
          onChange={(e) =>
            setRoute((prev) => ({
              ...prev,
              method: e.target.value as Method,
            }))
          }
          className="border border-gray-300 p-1 rounded appearance-none cursor-pointer"
        >
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="PATCH">PATCH</option>
          <option value="DELETE">DELETE</option>
        </select>

        {/* PATH */}
        <input
          value={route.path}
          onChange={(e) =>
            setRoute((prev) => ({ ...prev, path: e.target.value }))
          }
          placeholder="/api/example"
          className="font-mono border border-gray-300 p-1 rounded"
        />

        {/* AUTH */}
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={route.authRequired}
            onChange={(e) =>
              setRoute((prev) => ({
                ...prev,
                authRequired: e.target.checked,
              }))
            }
          />
          Auth Required
        </label>

        {/* CACHE ENABLE */}
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={route.cacheEnabled}
            onChange={(e) =>
              setRoute((prev) => ({
                ...prev,
                cacheEnabled: e.target.checked,
              }))
            }
          />
          Enable Cache
        </label>

        {/* CACHE TTL */}
        <div className="flex items-center gap-2">
          <label>Cache TTL</label>
          <select
            value={route.cacheTTL}
            onChange={(e) =>
              setRoute((prev) => ({
                ...prev,
                cacheTTL: Number(e.target.value) as CacheTTL,
              }))
            }
            className="border border-gray-300 p-1 rounded appearance-none cursor-pointer"
          >
            <option value={30}>30 s</option>
            <option value={60}>60 s</option>
            <option value={120}>120 s</option>
            <option value={180}>180 s</option>
          </select>
        </div>

        {/* DESCRIPTION */}
        <input
          value={route.description}
          onChange={(e) =>
            setRoute((prev) => ({ ...prev, description: e.target.value }))
          }
          placeholder="describe the route..."
          className="border border-gray-300 p-1 rounded"
        />
      </div>

      <button onClick={handlecreateRoute} className="btn-primary cursor-pointer">Add Route</button>
    </section>
  );
}
