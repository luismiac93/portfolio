import { Briefcase, GitBranch } from "lucide-react";
import { Button } from "./ui/button";

export const Social = ({ className }: { className?: string }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <Button asChild variant="outline" size="icon" className="mr-2">
        <a
          href="https://github.com/luismiac93"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitBranch />
        </a>
      </Button>
      <Button asChild variant="outline" size="icon">
        <a
          href="https://www.linkedin.com/in/luis-miguel-aza-caicedo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Briefcase />
        </a>
      </Button>
    </div>
  );
};
