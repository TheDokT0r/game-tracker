import { AppBar, Box, IconButton, Typography } from "@mui/material";
import ThemeToggleButton from "./theme-toggle";
import { CircleUser, Gamepad2 } from "lucide-react";
import styles from "./top-app-bar.module.scss";

export default function TopAppBar() {
  const onUserClick = () => {
    const a = document.createElement("a");
    a.href = "/login";
    a.click();
  };

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
          <IconButton onClick={onUserClick} edge="end">
            <CircleUser />
          </IconButton>
        </Box>
      </AppBar>
    </Box>
  );
}
