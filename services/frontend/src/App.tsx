import { RouterProvider } from "react-router-dom";
import router from "./lib/Router";
import { ThemeProvider } from "@mui/material/styles";
import useTheme, { darkTheme, lightTheme } from "@/stores/theme-store";
import TopAppBar from "./components/top-app-bar/top-app-bar";
import { CssBaseline } from "@mui/material";

export default function App() {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme === "dark" ? lightTheme : darkTheme}>
      <CssBaseline />
      <TopAppBar />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
