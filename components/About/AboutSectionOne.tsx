import Image from "next/image";
import AboutTitle from "../Common/AboutTitle";



const AboutSectionOne = () => {

  return (
    <section id="about" className="bg-cover bg-left-top lg:bg-left-bottom bg-no-repeat overflow-hidden bg-white bg-about-lg bg-about-sm" 
    // style={{ backgroundImage: "url('/images/Backgrounds/About.jpg')"}}
  >
      <div className="" >
        <div className="h-full border-b border-body-color/[.15] dark:border-white/[.15]" >
          <div className="h-full flex flex-col xxs:h-auto xs:h-auto xs:w-screen md:h-auto lg:flex-row lg:h-auto items-center overflow-hidden" >
            <div className="w-full h-auto px-4 lg:w-1/2 lg:h-full xxs:pt-14 xxs:px-14 xxs:h-auto xs:py-24 xs:px-20 sm:px-36 md:pt-24 md:mb-12 md:px-44 lg:px-24 lg:py-14 lg:mb-0 xl:px-32 xxl:mx-50 xxl:px-36 xxl:py-24 bg-grey-900 text-black " >
              <AboutTitle
                title="NUESTRA HISTORIA"
                paragraph="Nuestra empresa, fundada por Alfredo Ardu en 1957, comenzó con la planta de hipoclorito de sodio, Electroclor S.A.C.I. Con el tiempo, nos expandimos y establecimos nuestra sede en Chacra de la Merced. Durante las décadas del 90 y 2000, nos especializamos en servicios y venta de insumos para el tratamiento de aguas de consumo humano y residuales. Actualmente, somos un referente en el mercado del hipoclorito de sodio y hemos ampliado nuestra oferta a insumos para piletas y diversas industrias. Seguimos comprometidos con la excelencia y la satisfacción de nuestros clientes, ofreciendo soluciones de calidad para el tratamiento del agua y el cuidado de espacios acuáticos."
                mb="44px"
                
              />
            </div>

            <div className="w-screen h-full xxs:h-min lg:h-full lg:w-1/2 "  >
              <div
                className="relative mx-auto w-full object-contain overflow-hidden bg-cover bg-no-repeat bg-left-bottom xxs:w-[448px] xxs:h-[448px] xs:w-[572px] xs:h-[420px] sm:w-[768px] sm:h-[561px] md:w-[998px] md:h-[746px] lg:h-[913px] lg:w-[948px] lg:mb-0 xl:h-[985px] xxl:h-[945px]"
                data-wow-delay=".2s"
                style={{ backgroundImage: "url('/images/Brand/Planta2.jpg')"}}
              />
          </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
