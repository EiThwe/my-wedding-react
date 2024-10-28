import { Textarea, TextareaProps } from "@/components/ui/textarea";
import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface PropsType extends TextareaProps {
  label?: string;
  labelClassName?: string;
  inputClassName?: string;
  placeholder?: string;
}

const MyTextarea = forwardRef<HTMLTextAreaElement, PropsType>(
  ({ placeholder, label, labelClassName, inputClassName, ...props }, ref) => {
    return (
      <>
        {label && (
          <label htmlFor={label} className={twMerge(labelClassName)}>
            {label}
          </label>
        )}
        <Textarea
          id={label ?? "id"}
          ref={ref} // Forward the ref here
          placeholder={placeholder}
          className={twMerge(
            "!bg-white rounded-none placeholder:text-base text-gray-500 placeholder:!font-normal placeholder:text-gray-500 font-normal ",
            inputClassName
          )}
          {...props}
        />
      </>
    );
  }
);

MyTextarea.displayName = "MyTextarea"; // Optional: set a display name for better debugging

export default MyTextarea;
