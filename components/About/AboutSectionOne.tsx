import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28 bg-cover bg-center bg-no-repeat bg-blueArdu" style={{ backgroundImage: "url('/images/Backgrounds/background6D.svg')"
  }}>
      <div className="container" >
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28" >
          <div className="-mx-4 flex flex-col items-center" >
            <div className="w-full px-4 lg:w-100% text-justify bg-grey-900" >
              <SectionTitle
                title="Nuestra historia."
                paragraph="Nuestra empresa, fundada por Alfredo Ardu en 1957, comenzó con la planta de hipoclorito de sodio, Electroclor S.A.C.I. Con el tiempo, nos expandimos y en 1982 nos transformamos en Sociedad Anónima, estableciendo nuestra sede en Chacra de la Merced. Durante las décadas del 90 y 2000, nos especializamos en servicios y venta de insumos para el tratamiento de aguas de consumo humano y residuales. Actualmente, somos un referente en el mercado del hipoclorito de sodio y hemos ampliado nuestra oferta a insumos para piletas y diversas industrias. Seguimos comprometidos con la excelencia y la satisfacción de nuestros clientes, ofreciendo soluciones de calidad para el tratamiento del agua y el cuidado de espacios acuáticos."
                mb="44px"
              />
            </div>

            <div className="w-full px-4 lg:w-[75%]">
              <div
                className="wow fadeInUp relative mx-auto aspect-[19/9] w-full lg:mr-0"
                data-wow-delay=".2s"
              >
                {/* <Image
                  src="/images/Brand/Planta_light.jpg"
                  alt="about-image"
                  fill
                  className=" mx-auto max-w-full dark:hidden dark:drop-shadow-none lg:mr-0"
                /> */}
                <Image
                  src="/images/Brand/Planta2.gif"
                  alt="about-image"
                  fill
                  className=" mx-auto hidden max-w-full dark:block dark:drop-shadow-none lg:mr-0"
                />
              </div>
          </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
