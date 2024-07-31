import RotatingText from "../Products/rotatingText";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden h-[80vh] pb-16 pt-[200px] bg-light dark:bg-blueArdu md:pb-[0px] md:pt-[200px] xl:pb-[0px] xl:pt-[200px] 2xl:pb-[0px] 2xl:pt-[200px]"
    >
      <div className="absolute inset-0 overflow-hidden w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hidden md:block absolute top-0 left-0 w-full h-full object-cover"
          src="https://res.cloudinary.com/dsf3qr13z/video/upload/v1722435184/heroNew_dktcml.mp4"
        />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="block md:hidden absolute top-0 left-0 w-full h-full object-cover"
          src="https://res.cloudinary.com/dsf3qr13z/video/upload/v1722437195/heroMovileNew_zbnwgm.mp4"
        />
      </div>
      
      <div className="relative z-20 flex flex-row items-center justify-start w-full h-full">
        <RotatingText />
      </div>
    </section>
  );
};

export default Hero;
