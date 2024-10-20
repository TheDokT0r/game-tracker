"use client";
import { createTheme, ThemeProvider } from "@mui/material";
import { create } from "zustand";

type AppTheme = "light" | "dark";

interface ThemeStoreProps {
  theme: AppTheme;
  setTheme: (newTheme: AppTheme) => void;
  switchTheme: () => void;
}

const STORAGE_KEY = "app_theme";

const getInitialTheme = (): AppTheme => {
  const storageTheme = window.localStorage.getItem(STORAGE_KEY) as AppTheme | null;
  if (!storageTheme) {
    window.localStorage.setItem(STORAGE_KEY, "dark");
    return "dark";
  }

  return storageTheme;
};

const useTheme = create<ThemeStoreProps>((set, get) => ({
  theme: getInitialTheme(),
  setTheme: (newTheme) => {
    set({ theme: newTheme });
    window.localStorage.setItem(STORAGE_KEY, newTheme);
  },
  switchTheme: () => {
    if (get().theme === "dark") {
      get().setTheme("light");
    } else {
      get().setTheme("dark");
    }
  },
}));

export default useTheme;

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

export function ThemeLayoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme === "dark" ? lightTheme : darkTheme}>
      {children}
    </ThemeProvider>
  );
}
