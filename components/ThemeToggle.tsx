"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="rounded-md transition-colors flex items-center justify-center cursor-pointer w-[2.2rem]"
      variant="outline"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] scale-100 transition-all dark:scale-0 text-black" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 transition-all dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
