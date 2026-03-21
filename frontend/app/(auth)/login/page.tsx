import LoginForm from "@/components/login/authcomponent";
import SideComponent from "@/components/login/side-component";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col lg:flex-row justify-center items-center gap-16 px-4 py-20 lg:py-0 font-mono">
      <LoginForm />
      <div className="hidden lg:block">
        <SideComponent />
      </div>
    </div>
  );
}
