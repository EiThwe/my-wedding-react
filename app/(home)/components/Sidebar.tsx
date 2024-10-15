"use client";
import React, { useEffect, useState } from "react";

import { IoClose, IoMenu } from "react-icons/io5";
import Link from "next/link";

import { usePathname } from "next/navigation";
import MyDrawer from "@/components/MyDrawer";

const Sidebar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <aside className="lg:hidden">
      <MyDrawer
        direction="right"
        open={open}
        setOpen={setOpen}
        button={
          <button onClick={() => setOpen(true)} className="py-5 px-3 text-secondary">
            <IoMenu size={24} />
          </button>
        }
        contentClassName="sm:!w-[400px] w-full !p-0 left-auto"
      >
        <div className="w-full h-screen bg-white">
          <div className="px-3 py-5 flex justify-end">
            <button onClick={() => setOpen(false)}>
              <IoClose  size={20} className="text-secondary"/>
            </button>
          </div>

          <nav className="flex flex-col items-start gap-8 bg-white p-5">
            <Link
              href="#"
              className=" text-secondary hover:border-primary hover:text-primary font-medium"
            >
              Home
            </Link>
            <Link
              href="#invitation"
              className=" text-secondary hover:border-primary hover:text-primary  font-medium"
            >
              Invitation
            </Link>
            <Link
              href="#happy-couple"
              className=" text-secondary hover:border-primary hover:text-primary font-medium"
            >
              Happy Couple
            </Link>
            <Link
              href="#our-story"
              className=" text-secondary hover:border-primary hover:text-primary font-medium"
            >
              Our Story
            </Link>
            <Link
              href="#our-moments"
              className=" text-secondary hover:border-primary hover:text-primary  font-medium"
            >
              Our Moments
            </Link>
            <Link
              href="#location-guide"
              className=" text-secondary hover:border-primary hover:text-primary font-medium"
            >
              Location
            </Link>
            <Link
              href="#attendance"
              className=" text-secondary hover:border-primary hover:text-primary font-medium"
            >
              Attendance
            </Link>
          </nav>
        </div>
      </MyDrawer>
    </aside>
  );
};

export default Sidebar;
