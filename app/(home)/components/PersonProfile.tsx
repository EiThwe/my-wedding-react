import Image from "next/image";
import ProfileDescription from "./ProfileDescription";
import SocialIcons from "./SocialIcons";

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
      <div className="lg:w-[50%] w-full">
        <Image
          width={512}
          height={512}
          className="w-full sm:h-[550px] h-[350px] object-cover"
          alt={name}
          src={imageSrc}
        />
      </div>
      <div className="lg:w-[50%] w-full h-auto bg-primary-100/30 flex justify-center items-center lg:px-12 lg:py-0 sm:p-8 p-5">
        <div className="sm:space-y-5 space-y-3">
          <ProfileDescription
            name={name}
            greeting={greeting}
            description={description}
          />
          <SocialIcons links={links} />
        </div>
      </div>
    </div>
  );
};

export default PersonProfile;
