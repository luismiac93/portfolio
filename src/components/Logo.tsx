import { cn } from "@/lib/utils";
import { Link } from "react-router";
import { Cube } from "./Cube";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex justify-center items-center", className)}>
      <Cube />
      <h1 className="main-title text-xl sm:text-xl font-semibold text-center">
        <Link to="/">luismiac93</Link>
      </h1>
    </div>
  );
};
