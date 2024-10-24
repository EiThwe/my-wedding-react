"use client"; // Ensure to use this directive if you're using client-side rendering
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const InvitationSection = () => {
  return (
    <motion.section
      id="invitation"
      className="pt-[150px] pb-16 overflow-hidden"
      initial={{ scale: 0.9 }} // Start at 80% size for the whole section
      whileInView={{ scale: 1 }} // Scale to 100% size when in view
      transition={{ duration: 1.5 }} // Animation duration
      viewport={{ once: true }}
    >
      <div className="flex justify-center items-center">
        <div className="sm:w-[500px] sm:h-[650px] w-[350px] h-[450px] relative sm:px-0 px-3">
          <Image
            width={512}
            height={1024}
            className="sm:w-[250px] w-[150px] sm:h-[400px] h-[250px] absolute -top-[22%] lg:-left-[32%] sm:-left-[20%] -left-[15%] -rotate-12"
            src={
              "https://i.postimg.cc/fRx5nvLG/download-9-removebg-preview.png"
            }
            alt="left-flower"
          />

          <Image
            width={512}
            height={1024}
            className="sm:w-[250px] w-[150px] sm:h-[400px] h-[250px] absolute bottom-0 sm:-right-[22%] -right-[15%] rotate-120"
            src={
              "https://i.postimg.cc/BbgHsBVf/download-9-removebg-preview.png"
            }
            alt="right-flower"
          />

          <Image
            width={512}
            height={1024}
            className="sm:w-[500px] sm:h-[650px] w-[350px] h-[450px] shadow-2xl border border-primary-400/20 rounded-md relative overflow-hidden"
            src={
              "https://i.postimg.cc/y6wqc7wP/Brown-Elegant-Wedding-Invitation-Portrait-5.png"
            }
            alt="wedding-invitation"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default InvitationSection;
