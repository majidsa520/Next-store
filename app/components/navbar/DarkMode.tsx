"use client";
import { useDarkMode } from "@/app/context/DarkModeContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/components/dropdown-menu";
import { Button } from "@/app/components/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";
export default function DarkMode() {
  const { darkMode, setDarkMode, toggleDarkMode, setSystemThemePreference } =
    useDarkMode();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="outline" className="">
          {darkMode ? <MoonIcon /> : <SunIcon />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => setDarkMode(false)}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setDarkMode(true)}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={setSystemThemePreference}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
