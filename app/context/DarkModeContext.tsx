"use client";
import type { ReactNode } from "react";
import { createContext, useContext, useEffect } from "react";
import useLocalStorageState from "@/hooks/useLocalStorageState";

type DarkModeContextType = {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  toggleDarkMode: () => void;
  setSystemThemePreference: () => void;
};

const DarkModeContext = createContext<DarkModeContextType | null>(null);
function DarkModeProvider({ children }: { children: ReactNode }) {
  const [darkMode, setDarkMode] = useLocalStorageState("darkMode", false);
  function setSystemThemePreference() {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches
    ) {
      setDarkMode(false);
    } else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setDarkMode(true);
    }
  }
  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }
  useEffect(() => {
    if (darkMode === false) {
      document.documentElement.classList.remove("dark");
    }
    if (darkMode === true) {
      document.documentElement.classList.add("dark");
    }
  }, [darkMode]);
  return (
    <DarkModeContext.Provider
      value={{
        darkMode,
        setDarkMode,
        toggleDarkMode,
        setSystemThemePreference,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
}
function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (!context)
    throw new Error("You are using useContext outside of its context");
  return context;
}
export { DarkModeProvider, useDarkMode };
