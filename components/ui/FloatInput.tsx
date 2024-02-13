"use client";
import React, { HTMLInputTypeAttribute, useState } from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const FloatInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const [inputType, setInputType] = useState<
      HTMLInputTypeAttribute | undefined
    >(type);

    return (
      <input
        type={type}
        className={cn(
          "flex h-14 my-2  w-full  border border-input/50 rounded-md bg-background px-3 text-primary-black py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium  relative placeholder:text-muted-foreground/50   focus-visible:outline-none outline-none active:outline-none transition-all duration-150 ease-in-out focus-visible:border-ring   disabled:cursor-not-allowed disabled:opacity-50 ",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
FloatInput.displayName = "FloatInput";

export { FloatInput };
