"use client";
import React, { HTMLInputTypeAttribute, useState } from "react";

import { cn } from "@/lib/utils";
import Image from "next/image";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  eyeicon?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const { eyeicon } = props;
    const [inputType, setInputType] = useState<
      HTMLInputTypeAttribute | undefined
    >(type);

    if (!eyeicon) {
      return (
        <input
          type={type}
          className={cn(
            "flex h-12 w-full  border-b-2 border-input/30 bg-background px-3 text-primary-black py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/50   focus-visible:outline-none outline-none active:outline-none transition-all duration-150 ease-in-out focus-visible:border-ring   disabled:cursor-not-allowed disabled:opacity-50 ",
            className
          )}
          ref={ref}
          {...props}
        />
      );
    }

    const toggleType = (val: HTMLInputTypeAttribute | undefined) => {
      const type = val === "password" ? "text" : "password";
      setInputType(type);
    };

    return (
      <div className="relative">
        <input
          type={inputType}
          className={cn(
            "flex h-12 w-full  border-b-2 border-input/30 bg-background px-3 text-primary-black py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/50   focus-visible:outline-none outline-none active:outline-none transition-all duration-150 ease-in-out focus-visible:border-ring   disabled:cursor-not-allowed disabled:opacity-50 ",
            className
          )}
          ref={ref}
          {...props}
        />
        {eyeicon && (
          <span className="absolute right-4 top-1/2 -translate-y-1/2">
            <Image
              src={
                inputType === "password"
                  ? "/images/icon-eye-on.svg"
                  : "/images/icon-eye-off.svg"
              }
              alt="*"
              width={20}
              height={20}
              className="cursor-pointer"
              onClick={() => toggleType(inputType)}
            />
          </span>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
