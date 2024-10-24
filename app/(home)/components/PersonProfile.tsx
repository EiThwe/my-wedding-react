"use client"; // Ensure to use this directive if you're using client-side rendering
import Image from "next/image";
import ProfileDescription from "./ProfileDescription";
import SocialIcons from "./SocialIcons";
import { motion } from "framer-motion";

interface PersonProfileProps {
  name: string;
  greeting: string;
  description: string;
  imageSrc: string;
  reverse?: boolean;
  links: {
    facebook: string;
    instagram: string;
    github: string;
    linkedin: string;
  };
}

const PersonProfile: React.FC<PersonProfileProps> = ({
  name,
  greeting,
  description,
  imageSrc,
  reverse = false,
  links,
}) => {
  return (
    <div
      className={`flex flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } w-full`}
    >
      {/* Animated Image Div */}
      <motion.div
        className="lg:w-[50%] w-full overflow-hidden"
        initial={{ x: reverse ? 40 : -40, opacity: 0 }} // Start from the side and hidden
        whileInView={{ x: 0, opacity: 1 }} // Move to center and become visible
        transition={{ duration: 1 }} // Duration of the animation
        viewport={{ once: true }}
      >
        <Image
          width={512}
          height={512}
          className="w-full sm:h-[550px] object-cover hover:scale-110 transition-all duration-1000 ease-in-out"
          alt={name}
          src={imageSrc}
        />
      </motion.div>

      {/* Animated Description Div */}
      <motion.div
        className="lg:w-[50%] w-full h-auto bg-primary-100/30 flex justify-center items-center lg:px-12 lg:py-0 sm:p-8 p-5"
        initial={{ x: reverse ? -40 : 40, opacity: 0 }} // Start from the side and hidden
        whileInView={{ x: 0, opacity: 1 }} // Move to center and become visible
        transition={{ duration: 1 }} // Duration of the animation
        viewport={{ once: true }}
      >
        <div className="sm:space-y-5 space-y-3">
          <ProfileDescription
            name={name}
            greeting={greeting}
            description={description}
          />
          <SocialIcons links={links} />
        </div>
      </motion.div>
    </div>
  );
};

export default PersonProfile;
