'use client';
import { useParams, useRouter } from "next/navigation";

export default function ProjectPage(){
    const router=useRouter();
    const {projectId}=useParams();
    return(
        <div>
            /dashboard/projects/{projectId}
            
            <button onClick={()=>router.push('/dashboard/projects/id/analytics')}>analytics</button>
            <button onClick={()=>router.push('/dashboard/projects/id/api-keys')}>api-keys</button>
            <button onClick={()=>router.push('/dashboard/projects/id/routes')}>routes</button>
        </div>
    )
}

/*
- Project name & description
- Proxy URL (copy button)
- Project status (active/suspended)
- Origin URL
- Rate limit
- Allowed origins
- Delete project button

**Update project →**
*/