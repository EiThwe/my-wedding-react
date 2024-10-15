import PersonProfile from "./PersonProfile";
import SectionHeader from "./SectionHeader";

const GreetingSection: React.FC = () => {
  return (
    <section id="happy-couple" className="lg:py-20 py-16 container">
      <SectionHeader
        title="Happy Couple"
        description="A warm greeting from a happy couple, overflowing with love and joy. Together, we celebrate each moment, grateful for the bond we share and the happiness it brings."
      />
      <div className="mt-10">
        <PersonProfile
          name="Thwe Thwe"
          greeting="Hi Dear, I'm Thwe Thwe"
          description=" A collection of textile samples lay spread out on the table
                  Samsa was a travelling salesman and above it there hung a
                  picture that he had recently cut out of an illustrated
                  magazine And housed in a nice, gilded frame. It showed a lady
                  fitted out with a fur hat and fur boa who sat upright"
          imageSrc="https://i.postimg.cc/kgP4VFsM/photo-2024-09-21-21-31-37-2.jpg"
        />
        <PersonProfile
          name="Denny Kate"
          greeting="Hi Dear, I'm Denny Kate"
          description=" A collection of textile samples lay spread out on the table
                  Samsa was a travelling salesman and above it there hung a
                  picture that he had recently cut out of an illustrated
                  magazine And housed in a nice, gilded frame. It showed a lady
                  fitted out with a fur hat and fur boa who sat upright"
          imageSrc="https://i.postimg.cc/k5HCPwBN/photo-2024-09-21-21-31-37.jpg"
          reverse
        />
      </div>
    </section>
  );
};

export default GreetingSection;
