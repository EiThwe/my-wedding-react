import { Input } from "@/components/ui/input";
import React, { forwardRef } from "react";

import { twMerge } from "tailwind-merge";

interface PropsType extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelClassName?: string;
  inputClassName?: string;
  withAstrisk?: boolean;
  variant?: "default" | "outline" | "underline" | "search" | "ghost";
}

const MyInput = forwardRef<HTMLInputElement, PropsType>(
  (
    {
      label,
      labelClassName,
      inputClassName,
      withAstrisk,
      variant = "default",
      ...inputProps
    },
    ref
  ) => {
    return (
      <div className="space-y-[2px] w-full">
        {label && (
          <label
            htmlFor=""
            className={twMerge(
              "text-gray-500 font-[400] text-sm",
              labelClassName
            )}
          >
            {label}
            {withAstrisk && (
              <span className="text-red-500 ml-1 -translate-y-2 text-sm">
                *
              </span>
            )}
          </label>
        )}
        <Input
          {...inputProps} // Spread the input attributes
          ref={ref} // Attach the ref
          className={twMerge(
            (variant === "default" || variant === "outline") &&
              "bg-white border border-primary-200 focus-visible:border-primary rounded-none placeholder:text-base text-gray-500 placeholder:!font-normal placeholder:text-gray-500 font-normal focus:border-opacity-100 focus-visible:ring-0 focus-visible:ring-offset-[0px] focus-visible:ring-primary focus:ring-2 focus:ring-opacity-50 focus:ring-primary-500",
            variant === "underline" &&
              "bg-white border-b border-t-0 border-l-0 border-r-0 focus:border-primary-500 placeholder:text-gray-500  placeholder:!font-norma focus:border-opacity-100 border-primary-200 text-gray-500 font-normal rounded-none text-sm placeholder:text-base 0 focus-visible:ring-0 focus-visible:ring-offset-[0px] focus-visible:ring-transparent",
            variant === "search" &&
              "h-11 border-l border-y border-r-0 border-primary-20 placeholder:text-gray-500 rounded-none text-base  font-normal px-4 outline-none placeholder:font-normal text-gray-500 focus-visible:border-accent focus-visible:ring-0 focus-visible:ring-offset-0",
            variant === "ghost" &&
              "hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50 rounded-none border-none focus-visible:ring-0 focus-visible:ring-offset-0",
            inputClassName
          )}
        />
      </div>
    );
  }
);

MyInput.displayName = "MyInput";

export default MyInput;
