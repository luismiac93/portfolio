import { Footer } from "@/components/Footer";
import { MainMenu } from "@/components/MainMenu";
import { Outlet } from "react-router";

export const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-[calc(100vh-2.5rem)]">
      <main className="flex-1 px-2 2xl:px-0">
        <MainMenu />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
