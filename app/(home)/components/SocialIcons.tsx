import { FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";

const SocialIcons: React.FC = () => {
  return (
    <div className="flex gap-3 text-primary-400 !mt-8">
      <FaFacebookF />
      <FaInstagram />
      <FaGithub />
      <FaLinkedinIn />
    </div>
  );
};

export default SocialIcons;
