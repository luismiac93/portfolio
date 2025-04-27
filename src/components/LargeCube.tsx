import { BaseCube } from "./BaseCube";

interface SmallCubeProps {
  className?: string;
}

export const LargeCube = ({ className }: SmallCubeProps) => {
  return <BaseCube variant="large" className={className} />;
};