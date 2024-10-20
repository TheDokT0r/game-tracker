"use client";

import useTheme from "@/stores/theme-store";
import { ThemeProvider } from "@emotion/react";

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

export default function ThemeLayoutProvider({
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
