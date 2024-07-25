const SectionTitle = ({
  title1,
  title1a,
  title2,
  paragraph1,
  paragraph2,
  width = "100%",
  center,
  mb = "100px",
}: {
  title1: string;
  title1a: string;
  title2: string;
  paragraph1: string;
  paragraph2: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`flex flex-col w-full ${center ? "mx-auto text-start" : ""}`}
        data-wow-delay=".1s"
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className="xxs:mb-2 md:mb-4 xl:mb-6 text-3xl font-titles text-start text-darkBlue dark:text-darkBlue xxs:text-[40px] xs:text-[45px] md:text-[55px] xl:text-[60px]">
          {title1}
        </h2>
        <h2 className="xxs:mb-10 md:mb-12 lg:mb-10 text-3xl font-body text-start text-darkBlue dark:text-darkBlue xxs:text-[40px] xs:text-[45px] md:text-[55px] xl:text-[60px]">
          {title2}
        </h2>
        <h2 className="xxs:mb-10 md:mb-12 lg:mb-10 text-3xl font-titles text-start text-darkBlue dark:text-darkBlue xxs:text-[40px] xs:text-[45px] md:text-[55px] xl:text-[60px]">
          {title1a}
        </h2>
        <p className="text-base font-body text-start leading-tight text-black  xxs:text-[20px] xs:text-[22px] md:text-[25px] lg:text-[20px] xl:text-[25px]">
          {paragraph1}
        </p>
        <p className="text-base font-body text-start mt-6  leading-tight text-black  xxs:text-[20px] xs:text-[22px] md:text-[25px] lg:text-[20px] xl:text-[25px]">
          {paragraph2}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
