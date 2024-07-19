import RotatingText from "../Products/rotatingText";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden h-[80vh] pb-16 pt-[200px] bg-light dark:bg-blueArdu md:pb-[0px] md:pt-[200px] xl:pb-[0px] xl:pt-[200px] 2xl:pb-[0px] 2xl:pt-[200px]"
    >
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/videos/Hero.mp4"
        />
      </div>
      
      {/* RotatingText Component */}
      <div className="relative z-20 flex items-center justify-start pl-44 w-full h-full">
        <RotatingText />
      </div>
    </section>
  );
};

export default Hero;
