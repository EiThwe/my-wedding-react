import PersonProfile from "./PersonProfile";
import SectionHeader from "./SectionHeader";

const mySocialLinks = {
  facebook: "https://www.facebook.com/profile.php?id=100008563840418",
  instagram:
    "https://www.instagram.com/thwe_thwe_htun/profilecard/?igsh=MWcxdm95M2tkeDk1eQ==",
  github: "https://github.com/EiThwe",
  linkedin:
    "https://www.linkedin.com/in/thwe-thwe-htun-8940181b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
};

const hisSocialLinks = {
  facebook: "https://www.facebook.com/aung.myochit.98499",
  instagram:
    "https://www.instagram.com/aung.myochit.98499/profilecard/?igsh=MTkzNm9yMTZ6M3l4Zg==",
  github: "https://github.com/dennykate",
  linkedin: "https://www.linkedin.com/in/aung-myo-chit-862150285",
};

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
          description="I’m a web developer specializing in modern, scalable applications using React, Next.js, TypeScript, and Node.js. I love working on both frontend and backend projects, especially creating reusable components and custom UI elements. As we celebrate our wedding, I’m excited to share this journey with you and showcase my passion for technology and sustainability. I strive to minimize energy waste in my daily life, reflecting my commitment to a greener future. Thank you for joining us on this special occasion!"
          imageSrc="https://i.postimg.cc/SQ7FQ1Q2/greeting-1-1.jpg"
          links={mySocialLinks}
        />
        <PersonProfile
          name="Denny Kate"
          greeting="Hi Dear, I'm Denny Kate"
          description="I'm a passionate full-stack developer dedicated to crafting elegant solutions to complex problems. With expertise in technologies like React, Next.js, Node.js, and Laravel, I focus on creating responsive and user-friendly applications. As I begin this exciting new chapter in my life, I'm thrilled to share our wedding journey and celebrate this special occasion with our loved ones. Thank you for joining us on this memorable adventure!"
          imageSrc="https://i.postimg.cc/LsbC8fwb/greeting-2-1.jpg"
          links={hisSocialLinks}
          reverse
        />
      </div>
    </section>
  );
};

export default GreetingSection;
