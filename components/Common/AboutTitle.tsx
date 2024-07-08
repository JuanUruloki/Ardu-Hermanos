const AboutTitle = ({
  title,
  paragraph,
  width = "100%",
  center,
  mb = "100px",
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        data-wow-delay=".1s"
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className="mb-6 xxs:text-[20px] xxs:px-20 xs:text-[30px] xs:px-16 sm:text-[40px] sm:px-20 md:text-[50px] md:px-24 lg:text-[50px] lg:px-8 xl:text-[70px] xxl:px-14 font-titles text-center !leading-none text-darkBlue dark:text-black ">
          {title}
        </h2>
        <p className="text-lg xxs:text-[15px] xs:text-[18px] sm:text-[20px] md:text-[20px] lg:text-[20px] xl:text-[22px] font-body !leading-snug text-black md:text-sm">
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default AboutTitle;
