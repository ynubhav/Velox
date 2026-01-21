'use client';

import { signOut } from "next-auth/react"
import { toast } from "sonner";

export async function Logout() {
    console.log("LOGOUT FUNCTION CALLED");
    const sigoutbackend=await fetch('/api/auth/logout',{method:'POST',credentials:'include'});
    if(!sigoutbackend.ok){
        // console.log("SIGNOUT BACKEND FAILED");
        // await signOut({callbackUrl:'/'});
        return
    }
    const id = toast.loading("Signing out...", { duration: 50000 });
    console.log("SIGNOUT BACKEND RESPONSE",await sigoutbackend.json());
    await signOut({callbackUrl:'/'});
    return
}