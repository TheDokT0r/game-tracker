import { AppBar, Box, IconButton, Typography } from "@mui/material";
import ThemeToggleButton from "./theme-toggle";
import { CircleUser, Gamepad2 } from "lucide-react";
import styles from "./top-app-bar.module.scss";
import Link from "next/link";

export default function TopAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ display: "flex", flexDirection: "row", userSelect: "none" }}
      >
        <Box display="flex">
          <Gamepad2 size="2rem" className={styles["app-logo"]} />
          <Typography variant="h4">Game-Tracker</Typography>
        </Box>

        <Box position="absolute" right="1%">
          <ThemeToggleButton />
          <IconButton edge="end">
            <Link href="/account">
              <CircleUser />
            </Link>
          </IconButton>
        </Box>
      </AppBar>
    </Box>
  );
}
