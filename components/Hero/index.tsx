import Carousel from "@/components/Carousel";
// import { useTheme } from "next-themes";


const Hero = () => {
  // const {theme} = useTheme()
  return (
    <>
      <section
        id="home"
        
        className="relative z-10 overflow-hidden -mb-2 h-[100vh] pb-16 pt-[200px] bg-light dark:bg-blueArdu md:pb-[0px] md:pt-[200px] xl:pb-[0px] xl:pt-[200px] 2xl:pb-[0px] 2xl:pt-[200px]"

        >
          <div className=" relative z-10 overflow-hidden h-[100vh] bg-center -mt-52">
            <Carousel/>
          </div>
      </section>
    </>
  );
};

export default Hero;
