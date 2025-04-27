import { BaseCube } from "./BaseCube";

interface SmallCubeProps {
  className?: string;
}

export const SmallCube = ({ className }: SmallCubeProps) => {
  return <BaseCube variant="small" className={className} />;
};