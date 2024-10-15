"use client";
import * as React from "react";

import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { twMerge } from "tailwind-merge";

interface PropsType {
  button: React.JSX.Element;
  children: React.ReactNode;
  direction?: "top" | "bottom" | "left" | "right";
  contentClassName?: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function MyDrawer({
  button,
  children,
  direction = "left",
  contentClassName,
  open,
  setOpen,
}: PropsType) {
  return (
    <Drawer
      direction={direction}
      open={open}
      onOpenChange={setOpen}
    >
      <DrawerTrigger asChild>{button}</DrawerTrigger>
      <DrawerContent className={twMerge(contentClassName)}>
        {children}
      </DrawerContent>
    </Drawer>
  );
}
