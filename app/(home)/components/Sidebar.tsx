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

  const handleCloseSidebar = () => {
    setOpen(false);
  };

  return (
    <aside className="lg:hidden">
      <MyDrawer
        direction="right"
        open={open}
        setOpen={setOpen}
        button={
          <button
            aria-label="Menu"
            onClick={() => setOpen(true)}
            className="py-5 px-3 text-secondary relative"
          >
            <IoMenu size={24} />
            <span className="sr-only">Menu Button</span>
          </button>
        }
        contentClassName="sm:!w-[400px] w-full !p-0 left-auto z-[200]"
      >
        <div className="w-full h-[100dvh] bg-white">
          <div className="px-3 py-5 flex justify-end">
            <button
              aria-label="Close Button"
              onClick={() => setOpen(false)}
              className="relative"
            >
              <IoClose size={20} className="text-secondary" />
              <span className="sr-only">Close Button</span>
            </button>
          </div>

          <nav className="flex flex-col items-start gap-8 bg-white p-5">
            <Link
              href="#"
              className="text-secondary hover:border-primary hover:text-primary font-medium"
              onClick={handleCloseSidebar}
            >
              Home
            </Link>
            <Link
              href="#invitation"
              className="text-secondary hover:border-primary hover:text-primary font-medium"
              onClick={handleCloseSidebar}
            >
              Invitation
            </Link>
            <Link
              href="#happy-couple"
              className="text-secondary hover:border-primary hover:text-primary font-medium"
              onClick={handleCloseSidebar}
            >
              Happy Couple
            </Link>
            <Link
              href="#our-story"
              className="text-secondary hover:border-primary hover:text-primary font-medium"
              onClick={handleCloseSidebar}
            >
              Our Story
            </Link>
            <Link
              href="#our-moments"
              className="text-secondary hover:border-primary hover:text-primary font-medium"
              onClick={handleCloseSidebar}
            >
              Our Moments
            </Link>
            <Link
              href="#location-guide"
              className="text-secondary hover:border-primary hover:text-primary font-medium"
              onClick={handleCloseSidebar}
            >
              Location
            </Link>
            <Link
              href="#attendance"
              className="text-secondary hover:border-primary hover:text-primary font-medium"
              onClick={handleCloseSidebar}
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
