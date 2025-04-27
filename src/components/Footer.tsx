import { Link } from "react-router";
import { Separator } from "./ui/separator";

export const Footer = () => {
  return (
    <>
      <Separator className="mb-4" />
      <div className="w-full flex flex-col gap-1.5 md:gap-0 md:flex-row items-center justify-between text-xs font-thin mb-1 sm:mb-4 text-text-link">
        <p className="md:ml-3 xl:ml-0">
          Copyright ©{new Date().getFullYear()} luismiac93 💻. All rights
          reserved.
        </p>
        <p>
          <Link to="/privacy-policy">✪ Privacy Policy</Link>
        </p>
        <p className="md:mr-3 xl:mr-0">CO 🇨🇴</p>
      </div>
    </>
  );
};
