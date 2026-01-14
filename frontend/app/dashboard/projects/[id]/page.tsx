'use client';
import { useRouter } from "next/navigation";

export default function(){
    const router=useRouter();
    return(
        <div>
            /dashboard/projects/someid
            <button onClick={()=>router.push('/dashboard/projects/id/analytics')}>analytics</button>
            <button onClick={()=>router.push('/dashboard/projects/id/api-keys')}>api-keys</button>
            <button onClick={()=>router.push('/dashboard/projects/id/routes')}>routes</button>
        </div>
    )
}