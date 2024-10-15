/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

interface PropsType {
  children: (field: any) => React.ReactNode;
  form: any;
  name: string;
}

const MyFormItem: React.FC<PropsType> = ({ children, form, name }) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormControl className="w-full">{children(field)}</FormControl>
          <div className="h-[1px] !mt-0">
            <FormMessage className="sm:text-[10px] text-[8px] font-[300] text-red-500 " />
          </div>
        </FormItem>
      )}
    />
  );
};

export default MyFormItem;
