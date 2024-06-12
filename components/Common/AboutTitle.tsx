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
        className={`wow fadeInUp w-full ${center ? "mx-auto text-center" : ""}`}
        data-wow-delay=".1s"
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className="mb-6 text-3xl font-extrabold text-center !leading-tight text-blueArdu dark:text-blueArdu sm:text-4xl md:text-[45px]">
          {title}
        </h2>
        <p className="text-base font-bold !leading-relaxed text-blueArdu md:text-xl">
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default AboutTitle;
