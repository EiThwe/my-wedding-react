import { Textarea, TextareaProps } from "@/components/ui/textarea";
import React from "react";

import { twMerge } from "tailwind-merge";

interface PropsType extends TextareaProps {
  label?: string;
  labelClassName?: string;
  inputClassName?: string;
  placeholder?: string;
}

const MyTextarea: React.FC<PropsType> = ({
  placeholder,
  label,
  labelClassName,
  inputClassName,
  ...props
}) => {
  return (
    <>
      {label && (
        <label htmlFor={label} className={twMerge(labelClassName)}>
          {label}
        </label>
      )}
      <Textarea
        id={label ?? "id"}
        placeholder={placeholder}
        className={twMerge(
          "!bg-white rounded-none placeholder:text-base text-gray-500 placeholder:!font-normal placeholder:text-gray-500 font-normal ",
          inputClassName
        )}
        {...props}
      />
    </>
  );
};

export default MyTextarea;
