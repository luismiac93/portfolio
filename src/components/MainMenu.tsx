import { Link } from "react-router";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { Home, Menu } from "lucide-react";
import { Logo } from "./Logo";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { useState } from "react";
import { LargeCube } from "./LargeCube";

const mainMenu = [
  {
    to: "/",
    label: "Home",
    icon: <Home className="mx-2 h-4 w-4" />,
  },
  {
    to: "/projects",
    label: "Projects",
  },
  {
    to: "/about",
    label: "About",
  },
  {
    to: "/contact",
    label: "Contact",
  },
];

export const MainMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="sticky top-9 flex justify-between items-center bg-black  w-full border border-slate-200 dark:border-neutral-900 rounded-lg py-3 px-4 dark:shadow-menu">
      <Logo className="hidden md:flex" />
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList>
          {mainMenu.map((item) => (
            <NavigationMenuItem key={item.to}>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link to={item.to}>{item.icon ? item.icon : item.label}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <div className="hidden md:flex">Social</div>

      {/* mobile menu */}
      <Logo className="md:hidden" />
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="w-3/4 flex flex-col justify-center items-center md:hidden"
        >
          <SheetHeader>
            <SheetTitle className="flex items-center justify-center mb-4">
              <LargeCube />
            </SheetTitle>
            <SheetDescription asChild>
              <h1
                onClick={() => setOpen(false)}
                className="md:hidden main-title text-white text-xl sm:text-xl font-semibold text-center"
              >
                <Link to="/">luismiac93</Link>
              </h1>
            </SheetDescription>
          </SheetHeader>
          {mainMenu.map((item) => (
            <Button
              key={item.to}
              asChild
              onClick={() => setOpen(false)}
              variant="ghost"
            >
              <Link to={item.to} className="flex items-center">
                {item.label}
              </Link>
            </Button>
          ))}
        </SheetContent>
      </Sheet>
    </div>
  );
};
