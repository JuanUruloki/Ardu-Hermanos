import Image from "next/image";
import AboutTitle from "../Common/AboutTitle";



const AboutSectionOne = () => {

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28 bg-cover bg-center bg-no-repeat bg-blueArdu" style={{ backgroundImage: "url('/images/Backgrounds/background6F.svg')"
  }}>
      <div className="container" >
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28" >
          <div className="-mx-4 flex flex-col items-center" >
            <div className="w-full px-4 lg:w-100% text-justify bg-grey-900 text-black" >
              <AboutTitle
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
                <Image
                  src="/images/Brand/Planta2.gif"
                  alt="about-image"
                  fill
                  className=" mx-auto hidden max-w-full rounded-lg dark:block dark:shadow-contact lg:mr-0"
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
