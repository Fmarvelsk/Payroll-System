import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        "max-w-[1300px] w-full mx-auto px-4 sm:px-9 md:px-[50px]",
        className
      )}>
      {children}
    </div>
  );
};

export default Container;
