import { cn } from "../lib/Utils";

interface TitleProps {
  title: string;
  className?: string;
}

const Title = ({ title, className }: TitleProps) => {
  return <h1 className={cn("text-5xl font-bold", className)}>{title}</h1>;
};

export default Title;
