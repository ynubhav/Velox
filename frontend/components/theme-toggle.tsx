"use client";
import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch by only rendering after mount
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-9 w-9 border-2 border-primary/20 bg-card/50" />
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="h-9 w-9 border-2 border-primary/20 flex items-center justify-center hover:bg-primary/10 transition-colors uppercase font-bold text-[10px]"
      title={"TOGGLE_THEME"}
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4 text-accent" />
      ) : (
        <Moon className="h-4 w-4 text-primary" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
