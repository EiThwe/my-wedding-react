import Image from "next/image";
import React from "react";

const InvitationSection = () => {
  return (
    <section id="invitation" className="pt-[150px] pb-16 overflow-hidden">
      <div className="flex justify-center items-center">
        <div className="sm:w-[500px] sm:h-[650px] w-[350px] h-[450px] relative sm:px-0 px-3">
          <Image
            width={512}
            height={1024}
            className="sm:w-[250px] w-[150px] sm:h-[400px] h-[250px] absolute -top-[22%] lg:-left-[32%] sm:-left-[20%] -left-[15%] -rotate-12"
            src={
              "https://i.postimg.cc/fRx5nvLG/download-9-removebg-preview.png"
            }
            alt="left-flower"
          />

          <Image
            width={512}
            height={1024}
            className="sm:w-[250px] w-[150px] sm:h-[400px] h-[250px] absolute bottom-0 sm:-right-[22%] -right-[15%] rotate-120"
            src={
              "https://i.postimg.cc/BbgHsBVf/download-9-removebg-preview.png"
            }
            alt="right-flower"
          />

          <Image
            width={512}
            height={1024}
            className="sm:w-[500px] sm:h-[650px] w-[350px] h-[450px] shadow-2xl border border-primary-400/20 rounded-md relative overflow-hidden"
            src={
              "https://i.postimg.cc/y6wqc7wP/Brown-Elegant-Wedding-Invitation-Portrait-5.png"
            }
            alt="wedding-invitation"
          />
        </div>
      </div>
    </section>
  );
};

export default InvitationSection;
