"use client";
import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith("/dashboard");
  const isAuthPage = pathname === "/login" || pathname === "/signup";

  // Hide global nav/footer on dashboard and auth pages for a cleaner look
  // Auth pages have their own local headers/logic
  const hideNav = isDashboard || isAuthPage;

  return (
    <>
      {!isDashboard && <Navbar />}
      <main className={`min-h-screen ${!isDashboard ? "pt-24" : ""}`}>
        {children}
      </main>
      {!isDashboard && <Footer />}
    </>
  );
}
