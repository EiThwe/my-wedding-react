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
      <Link href={links.facebook}>
        <FaFacebookF />
      </Link>
      <Link href={links.instagram}>
        <FaInstagram />
      </Link>
      <Link href={links.github}>
        <FaGithub />
      </Link>
      <Link href={links.linkedin}>
        <FaLinkedinIn />
      </Link>
    </div>
  );
};

export default SocialIcons;
