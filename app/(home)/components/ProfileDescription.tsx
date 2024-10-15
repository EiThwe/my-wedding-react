import SocialIcons from "./SocialIcons";

interface ProfileDescriptionProps {
    name: string;
    greeting: string;
    description: string;
  }
  
  const ProfileDescription: React.FC<ProfileDescriptionProps> = ({ name, greeting, description }) => {
    return (
      <div className="lg:w-[50%] w-full h-auto bg-primary-100/30 flex justify-center items-center lg:px-12 lg:py-0 sm:p-8 p-5">
        <div className="sm:space-y-5 space-y-3">
          <p className="font-parisienne text-secondary sm:text-5xl text-3xl">{name}</p>
          <p className="sm:text-2xl text-lg font-medium text-secondary">{greeting}</p>
          <p className="font-normal text-gray-500 leading-7">{description}</p>
          <SocialIcons/>
        </div>
      </div>
    );
  };
  
  export default ProfileDescription;
  