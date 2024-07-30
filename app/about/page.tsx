import AboutSectionOne from "@/components/About/AboutSectionOne";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ardu Hermanos - Empresa",
  description: "Nuestra Historia",
};

const AboutPage = () => {
  return (
    <>
    <div className="relative z-10 overflow-hidden h-[80vh] pb-16 pt-[200px] bg-light dark:bg-blueArdu md:pb-[0px] md:pt-[200px] xl:pb-[0px] xl:pt-[200px] 2xl:pb-[0px] 2xl:pt-[200px]">

    <div className=" z-10 h-[919px]  w-full overflow-hidden bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 h-full w-full overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute left-0 top-0 hidden h-full w-full object-cover md:block"
            src="/videos/Planta.mp4"
          />
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute left-0 top-0 block h-full w-full object-cover md:hidden"
            src="/videos/PlantaMobile.mp4"
          />
        </div>
      </div>
    </div>
      <AboutSectionOne />
      <Contact/>
    </>
  );
};

export default AboutPage;
