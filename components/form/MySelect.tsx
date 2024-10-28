import * as React from "react";
import { twMerge } from "tailwind-merge";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectProps } from "@radix-ui/react-select";

interface PropsType extends SelectProps {
  label?: string;
  placeholder?: string;
  labelClassName?: string;
  inputClassName?: string;
  placeholderClassName?: string;
  withAstrisk?: boolean;
  value?: string;
  onChange?: (value: string) => void;
  data?:
    | {
        value: string;
        name: string;
        isDisable?: boolean;
      }[]
    | [];
}

const MySelect = React.forwardRef<HTMLDivElement, PropsType>(
  (
    {
      placeholder,
      label,
      labelClassName,
      inputClassName,
      placeholderClassName,
      withAstrisk,
      value,
      onChange,
      data,
      ...props
    },
    ref
  ) => {
    return (
      <div className="w-full" ref={ref}>
        {label && (
          <label
            htmlFor={label}
            className={twMerge("text-secondary font-[400]", labelClassName)}
          >
            {label}
            {withAstrisk && (
              <span className="text-red-500 ml-1 -translate-y-2">*</span>
            )}
          </label>
        )}
        <Select {...props} value={value} onValueChange={onChange}>
          <SelectTrigger
            className={twMerge(
              "w-full !rounded-[1px] focus:!border-[1px] focus:!ring-0 border border-primary-200",
              inputClassName
            )}
          >
            <SelectValue
              placeholder={placeholder}
              className={twMerge("!text-gray-500", placeholderClassName)}
            />
            <span className="sr-only">Selected Input</span>
          </SelectTrigger>
          {data && (
            <SelectContent
              position="popper"
              className="!z-[100] !bg-white relative"
            >
              {data.map((dt) => (
                <SelectItem
                  disabled={dt.isDisable}
                  key={dt.value}
                  value={dt.value}
                >
                  <span className="!font-normal text-gray-500">{dt.name}</span>
                  <span className="sr-only">Select Input - {dt.name}</span>
                </SelectItem>
              ))}
            </SelectContent>
          )}
        </Select>
      </div>
    );
  }
);

MySelect.displayName = "MySelect"; // Optional: set a display name for better debugging

export default MySelect;
