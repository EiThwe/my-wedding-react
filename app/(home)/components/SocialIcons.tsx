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
      <Link className="hover:-translate-y-1 duration-500 ease-in-out transition-all" href={links.facebook}>
        <FaFacebookF />
      </Link>
      <Link className="hover:-translate-y-1 duration-500 ease-in-out transition-all" href={links.instagram}>
        <FaInstagram />
      </Link>
      <Link className="hover:-translate-y-1 duration-500 ease-in-out transition-all" href={links.github}>
        <FaGithub />
      </Link>
      <Link className="hover:-translate-y-1 duration-500 ease-in-out transition-all" href={links.linkedin}>
        <FaLinkedinIn />
      </Link>
    </div>
  );
};

export default SocialIcons;
