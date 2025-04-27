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
import { Cube } from "./Cube";

export const MainMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="sticky top-9 flex justify-between items-center bg-black  w-full border border-slate-200 dark:border-neutral-900 rounded-lg py-3 px-4 dark:shadow-menu">
      <Logo className="hidden md:flex" />
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link to="/">
                <Home className="mx-2 h-4 w-4" />
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link to="/privacy-policy">Projects</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link to="/privacy-policy">About</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link to="/privacy-policy">Contact</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
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
              <Cube />
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
          <Button asChild onClick={() => setOpen(false)} variant="ghost">
            <Link to="/">Home</Link>
          </Button>
          <Button asChild onClick={() => setOpen(false)} variant="ghost">
            <Link to="/privacy-policy">Projects</Link>
          </Button>
          <Button asChild onClick={() => setOpen(false)} variant="ghost">
            <Link to="/privacy-policy">About</Link>
          </Button>
          <Button asChild onClick={() => setOpen(false)} variant="ghost">
            <Link to="/privacy-policy">Contact</Link>
          </Button>
        </SheetContent>
      </Sheet>
    </div>
  );
};
