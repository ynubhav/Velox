import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

export function RefreshAuthWatcher() {
  const { data: session, status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session?.error === "RefreshAccessTokenError") {
      toast.error("You have been logged out. Please log in again.");
      router.push("/login");
    }
  }, [status, router]);

  return null;
}

export function AuthWatcher() {
  const { data: session, status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session?.error === "RefreshAccessTokenError") {
      toast.error("You have been logged out. Please log in again.");
      router.push("/login");
    }
  }, [status, router]);

  return null;
}