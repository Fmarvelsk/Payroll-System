import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const PrimaryCard = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={twMerge("bg-primary p-7 rounded-lg text-white", className)}>
      {children}
    </div>
  );
};

export default PrimaryCard;
