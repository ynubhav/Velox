'use client'
import { useRouter } from "next/navigation";

export default function(){
    const router=useRouter();
    return(
        <div>
            /dashboard/projects
            <button onClick={()=>router.push('/dashboard/projects/osme')}>projects</button>
        </div>
    )
}