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
    <section id="about" className="pt-16 md:pt-20 lg:pt-28 bg-greyArdu">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-col items-center">
            <div className="w-full px-4 lg:w-100% text-justify bg-grey-900" >
              <SectionTitle
                title="Nuestra historia."
                paragraph="Con orgullo y dedicación, nuestra empresa surge de la visión
                pionera de nuestro socio fundador, Alfredo Ardu, en el año
                1957. Inicialmente establecimos Electroclor S.A.C.I., la
                primera planta de hipoclorito de sodio. A medida que
                evolucionamos a lo largo de los años, nos asociamos con sus
                hermanos y fundamos Ardu Hermanos S.R.L. en busca de
                crecimiento y diversificación en la industria química. En
                1982, respondiendo al crecimiento constante, nos transformamos
                en una Sociedad Anónima (S.A.), adaptándonos a los desafíos y
                oportunidades que presentaba el panorama nacional. Nuestra
                expansión nos llevó a colaborar con diversos sectores y, en
                ese período, establecimos nuestra sede en Chacra de la Merced,
                que hoy en día es el epicentro de nuestras operaciones. A lo
                largo de la década del 90 y principios del 2000, nos
                especializamos en la provisión de servicios y venta de insumos
                para el tratamiento de aguas de consumo humano y residuales.
                Esta dedicación sigue siendo el corazón de nuestro negocio
                actual, donde también hemos ampliado nuestra oferta para
                incluir insumos destinados a piletas y natatorios como asi
                también diversos insumos químicos para industrias. Hoy, somos
                un actor relevante en el mercado del hipoclorito de sodio,
                comprometidos con la excelencia y la satisfacción de nuestros
                clientes. Agradecemos la confianza depositada en nosotros a lo
                largo de los años y seguimos enfocados en brindar soluciones
                de calidad para el tratamiento del agua y el cuidado de
                espacios acuáticos."
                mb="44px"
              />

              {/* <div
                className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Premium quality" />
                    <List text="Tailwind CSS" />
                    <List text="Use for lifetime" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Next.js" />
                    <List text="Rich documentation" />
                    <List text="Developer friendly" />
                  </div>
                </div>
              </div> */}
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto aspect-[9/13] max-w-[500px] lg:mr-0"
                data-wow-delay=".2s"
              >
                {/* <Image
                  src="/images/Brand/Planta_light.jpg"
                  alt="about-image"
                  fill
                  className=" mx-auto max-w-full dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                <Image
                  src="/images/Brand/Planta_dark.jpg"
                  alt="about-image"
                  fill
                  className=" mx-auto hidden max-w-full dark:block dark:drop-shadow-none lg:mr-0"
                /> */}
              </div>
          </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
