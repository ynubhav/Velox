"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function Routercomponent() {
    const {projectId}=useParams();
  return <div>
    <Link className="hover:underline" href="/dashboard">/dashboard</Link>
    <Link className="hover:underline" href="/dashboard/projects">/projects</Link>
    <Link className="hover:underline" href={`/dashboard/projects/${projectId}`}>/{projectId}</Link>
    <span>/analytics</span>
  </div>;
}