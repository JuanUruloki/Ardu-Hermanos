const AboutPageTitle = ({
  title1,
  title2,
  paragraph,
  width = "100%",
  mb = "100px",
}: {
  title1: string;
  title2: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className="w-full justify-center text-left"
        data-wow-delay=".1s"
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className="font-titles text-left !leading-none text-white dark:text-white mb-2 lg:mb-2 text-[30px] xxs:text-[40px] xs:text-[50px] sm:text-[55px]  md:text-[60px] lg:text-[50px] lg:px-20 xl:text-[70px] xxl:text-[90px]  ">
          {title1}
        </h2>
        <h2 className="font-titles text-left !leading-none text-white dark:text-white mb-6 lg:mb-8 text-[30px] xxs:text-[40px] xs:text-[50px] sm:text-[55px]  md:text-[60px] lg:text-[50px] lg:px-20 xl:text-[70px] xxl:text-[90px]  ">
          {title2}
        </h2>
        <p className="font-body !leading-snug text-white lg:px-20 text-[16px] xxs:text-[18px] xs:text-[20px] sm:text-[26px]  md:text-[24px] lg:text-[20px]  xl:text-[22px]  md:text-sm">
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default AboutPageTitle;
