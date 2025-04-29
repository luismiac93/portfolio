import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "./components/theme-provider.tsx";
import { RouterProvider } from "react-router";
import { router } from "./router/router.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="background-custom">
        <div className="max-w-7xl mx-auto pt-9">
          <RouterProvider router={router} />
        </div>
      </div>
    </ThemeProvider>
  </StrictMode>
);
