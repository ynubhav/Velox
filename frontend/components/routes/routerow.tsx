import { Pencil, Trash2 } from "lucide-react";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type Route = {
  _id: string;
  method: string;
  path: string;
  authRequired: boolean;
  cacheEnabled: boolean;
  cacheTTL?: number;
};

export function RouteRow({ route }: { route: Route }) {
  const { projectId }=useParams();

  const router=useRouter();

async function handledelete() {
  // calls the delete api
  const response = await fetch(`/api/project/${projectId}/route/${route._id}`,{ method : 'DELETE' });
  if(!response.ok)
  {
    return toast.error('Deletion Failed');
  }
  router.refresh();
  return toast.success('Route Deleted');
}
  return (
    <tr className="border-b last:border-none">
      <td className="px-4 py-2 font-mono">{route.method}</td>
      <td className="px-4 py-2 font-mono">{route.path}</td>

      <td className="px-4 py-2">
        {route.authRequired ? "Required" : "Public"}
      </td>

      <td className="px-4 py-2">
        {route.cacheEnabled ? "Enabled" : "Disabled"}
      </td>

      <td className="px-4 py-2">
        {route.cacheEnabled ? `${route.cacheTTL}s` : "—"}
      </td>

      <td className="px-4 py-2 flex justify-end gap-2">
        <button className="text-slate-600 hover:text-slate-900">
          <Pencil className="size-4" />
        </button>
        <button onClick={handledelete} className="text-slate-600 hover:text-slate-900">
          <Trash2 className="size-4" />
        </button>
      </td>
    </tr>
  );
}
