"use client";
import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import SocialIcons from "./SocialIcons";
import NextGenImage from "@/components/images/NextGenImage";
import Link from "next/link";

const mySocialLinks = {
  facebook: "https://www.facebook.com/profile.php?id=100008563840418",
  instagram:
    "https://www.instagram.com/thwe_thwe_htun/profilecard/?igsh=MWcxdm95M2tkeDk1eQ==",
  github: "https://github.com/EiThwe",
  linkedin:
    "https://www.linkedin.com/in/thwe-thwe-htun-8940181b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
};

const FooterSection = () => {
  return (
    <footer className="!w-full lg:pt-20 pt-16">
      <div className="relative min-h-screen py-16 bg-cover bg-[url('https://i.postimg.cc/zDpdgcj0/Premium-Vector-Abstract-splashed-watercolor-textured-background.jpg')] bg-no-repeat">
        <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-70 flex flex-col items-center justify-center">
          <div className="relative sm:w-[450px] sm:h-[450px] w-[300px] h-[300px] flex justify-center items-center">
            <NextGenImage
              width={512}
              height={512}
              wrapperClassName="sm:w-[450px] sm:h-[450px] w-[300px] h-[300px] absolute z-[5] top-0 left-0"
              src={"https://i.postimg.cc/T2mdKHnN/leaves-frame.png"}
              alt="img-frame"
            />
            <NextGenImage
              width={512}
              height={512}
              wrapperClassName="sm:w-[300px] sm:h-[300px] w-[200px] h-[200px] rounded-full object-cover"
              src={"https://i.postimg.cc/xT0JxZF9/footer-image.jpg"}
              alt="couple-img"
              enableScale
            />
          </div>
          <motion.p
            className="sm:text-[5rem] text-[3rem] font-parisienne"
            initial={{ y: 20, opacity: 0 }} // Initial state (slide down)
            whileInView={{ y: 0, opacity: 1 }} // Final state (slide up)
            transition={{ duration: 0.5 }} // Transition duration
          >
            Thank You
          </motion.p>
          <SocialIcons links={mySocialLinks} />
          <p className="text-secondary/50 mt-4 text-center">
            Feel free to contact{" "}
            <Link
              href={
                "https://www.facebook.com/profile.php?id=100008563840418&mibextid=ZbWKwL"
              }
              target="_blank"
              className="text-primary-300"
            >
              TCUBE
            </Link>{" "}
            to create your own customized invitation website
          </p>
          <p className="text-secondary/50 mt-4">
            &#169; 2024 by{" "}
            <Link
              href={
                "https://www.facebook.com/profile.php?id=100008563840418&mibextid=ZbWKwL"
              }
              className="text-primary-300"
            >
              TCUBE
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
