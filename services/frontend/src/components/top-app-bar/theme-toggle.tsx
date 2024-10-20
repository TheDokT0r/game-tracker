"use client";

import { IconButton, IconButtonProps } from "@mui/material";
import useTheme from "@/stores/theme-store";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggleButton(props: IconButtonProps) {
  const { theme, switchTheme } = useTheme();

  return (
    <IconButton onClick={switchTheme} {...props}>
      {theme === "dark" ? <Sun /> : <Moon />}
    </IconButton>
  );
}
