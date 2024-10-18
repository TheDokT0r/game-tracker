import { AppBar, Box, Typography } from "@mui/material";
import ThemeToggleButton from "./theme-toggle";
import { Gamepad2 } from "lucide-react";
import styles from "./top-app-bar.module.scss";

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
        <ThemeToggleButton sx={{ position: "absolute", right: 0 }} />
      </AppBar>
    </Box>
  );
}
