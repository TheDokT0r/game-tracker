import { ThemeProvider } from "./components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";
import { RouterProvider } from "react-router-dom";
import router from "./lib/Router";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ModeToggle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
