'use client';

import { signOut } from "next-auth/react"

export async function Logout() {
    const sigoutbackend=await fetch('/api/auth/logout',{method:'POST'})
    await signOut({callbackUrl:'/'});
    return
}