import Image from "next/image";
import ProfileDescription from "./ProfileDescription";

interface PersonProfileProps {
  name: string;
  greeting: string;
  description: string;
  imageSrc: string;
  reverse?: boolean;
}

const PersonProfile: React.FC<PersonProfileProps> = ({
  name,
  greeting,
  description,
  imageSrc,
  reverse = false,
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
          className="w-full sm:h-[500px] h-[350px] object-cover"
          alt={name}
          src={imageSrc}
        />
      </div>
      <ProfileDescription
        name={name}
        greeting={greeting}
        description={description}
      />
    </div>
  );
};

export default PersonProfile;
