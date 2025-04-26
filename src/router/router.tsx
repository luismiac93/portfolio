import { createBrowserRouter } from "react-router";
import { HomePage } from "../pages/HomePage";
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
        path: "privacy-policy",
        element: <PrivacyPolicyPage />,
      },
    ],
  },
]);
