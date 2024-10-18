import { createTheme } from "@mui/material";
import { create } from "zustand";

type AppTheme = "light" | "dark";

interface ThemeStoreProps {
  theme: AppTheme;
  setTheme: (newTheme: AppTheme) => void;
  switchTheme: () => void;
}

const STORAGE_KEY = "app_theme";

const getInitialTheme = (): AppTheme => {
  const storageTheme = localStorage.getItem(STORAGE_KEY) as AppTheme | null;
  if (!storageTheme) {
    localStorage.setItem(STORAGE_KEY, "dark");
    return "dark";
  }

  return storageTheme;
};

const useTheme = create<ThemeStoreProps>((set, get) => ({
  theme: getInitialTheme(),
  setTheme: (newTheme) => {
    set({ theme: newTheme });
    localStorage.setItem(STORAGE_KEY, newTheme);
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
