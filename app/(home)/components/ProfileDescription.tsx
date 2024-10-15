interface ProfileDescriptionProps {
  name: string;
  greeting: string;
  description: string;
}

const ProfileDescription: React.FC<ProfileDescriptionProps> = ({
  name,
  greeting,
  description,
}) => {
  return (
    <>
      <p className="font-parisienne text-secondary sm:text-5xl text-3xl">
        {name}
      </p>
      <p className="sm:text-2xl text-lg font-medium text-secondary">
        {greeting}
      </p>
      <p className="font-normal text-gray-500 leading-7">{description}</p>
    </>
  );
};

export default ProfileDescription;
