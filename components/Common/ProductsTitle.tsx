const SectionTitle = ({
  title,
  paragraph1,
  paragraph2,
  width = "100%",
  center,
  mb = "100px",
}: {
  title: string;
  paragraph1: string;
  paragraph2: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`flex flex-col w-[50vw] h-[600px] ${center ? "mx-auto text-center" : ""}`}
        data-wow-delay=".1s"
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className="mb-6 text-3xl font-titles text-start leading-none text-chalkArdu dark:text-black xxs:text-[40px] sm:text-[55px] md:text-[70px] lg:text-[80px] xl:text-[100px]">
          {title}
        </h2>
        <p className="text-base font-body text-start leading-tight text-black xxs:text-[20px] sm:text-[23px] md:text-[25px] lg:text-[25px] xl:text-[25px]">
          {paragraph1}
        </p>
        <p className="text-base font-body text-start mt-6 leading-tight text-black xxs:text-[20px] sm:text-[23px] md:text-[25px] lg:text-[25px] xl:text-[25px]">
          {paragraph2}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
