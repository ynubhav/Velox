import SignUpForm from "@/components/signup/authcomponent";
import SideComponent from "@/components/signup/side-component";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col-reverse lg:flex-row justify-center items-center gap-16 px-4 py-20 lg:py-0 font-mono">
      <div className="hidden lg:block">
        <SideComponent />
      </div>
      <SignUpForm />
    </div>
  );
}
