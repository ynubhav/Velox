import AccountPage from "@/components/account/page";
import { NEXT_AUTH_CONFIG } from "@/lib/auth";
import { getServerSession, Session } from "next-auth";
import { redirect } from "next/navigation";

export default async function () {
  //check the session here
  const session: Session | null = await getServerSession(NEXT_AUTH_CONFIG);
  console.log("session in account page", session);
  if (!session || session?.error === "RefreshAccessTokenError") {
    redirect("/");
  }
  //pass the user data to client componet
  //call required api's here only just pass the data to the client component
  return (
    <>
      <AccountPage session={session} />
    </>
  );
}
