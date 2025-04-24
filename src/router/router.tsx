import { createBrowserRouter } from "react-router";
import { HomePage } from "../pages/HomePage";
import PrivacyPolicyPage from "../pages/PrivacyPolicyPage";

export const router = createBrowserRouter([
    { 
        path: "/",
        element: <HomePage />
    },
    {
        path: "/privacy-policy",
        element: <PrivacyPolicyPage />
    }
]);
