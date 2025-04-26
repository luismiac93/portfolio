import { MainMenu } from "@/components/MainMenu";
import { Outlet } from "react-router";

export const MainLayout = () => {
  return (
    <>
      <MainMenu />
      <Outlet />
    </>
  );
};
