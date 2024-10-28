import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import Link from "next/link";

interface SocialIconsProps {
  links: {
    facebook: string;
    instagram: string;
    github: string;
    linkedin: string;
  };
}

const SocialIcons: React.FC<SocialIconsProps> = ({ links }) => {
  return (
    <div className="flex gap-3 text-primary-400 !mt-8">
      <Link
        className="hover:-translate-y-1 duration-500 ease-in-out transition-all"
        href={links.facebook}
      >
        <FaFacebookF />
        <span className="sr-only">Facebook</span>
      </Link>
      <Link
        className="hover:-translate-y-1 duration-500 ease-in-out transition-all"
        href={links.instagram}
      >
        <FaInstagram />
        <span className="sr-only">Instagram</span>
      </Link>
      <Link
        className="hover:-translate-y-1 duration-500 ease-in-out transition-all"
        href={links.github}
      >
        <FaGithub />
        <span className="sr-only">Gitthub</span>
      </Link>
      <Link
        className="hover:-translate-y-1 duration-500 ease-in-out transition-all"
        href={links.linkedin}
      >
        <FaLinkedinIn />
        <span className="sr-only">Linkedin</span>
      </Link>
    </div>
  );
};

export default SocialIcons;
