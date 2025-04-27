import { createBrowserRouter } from "react-router";
import { HomePage } from "../pages/HomePage";
import { ProjectsPage } from "../pages/ProjectsPage";
import { AboutPage } from "../pages/AboutPage";
import { ContactPage } from "../pages/ContactPage";
import PrivacyPolicyPage from "../pages/PrivacyPolicyPage";
import { MainLayout } from "@/layouts/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "projects",
        element: <ProjectsPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicyPage />,
      },
    ],
  },
]);
