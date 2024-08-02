import AboutSectionOne from "@/components/About/AboutSectionOne";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import AboutPageTitle from "@/components/Common/AboutPageTitle";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

export const metadata: Metadata = {
  title: "Ardu Hermanos - Empresa",
  description: "Nuestra Historia",
};

const AboutPage = () => {
  return (
    <>
      <div
        className="relative z-10 overflow-hidden bg-aboutPage-sm bg-aboutPage-lg bg-cover bg-left-top bg-no-repeat h-[200vw] md:h-[80vh] bg-light dark:bg-blueArdu mt-[80px]">
        <div className="relative z-20 flex flex-col lg:flex-row items-center justify-center lg:justify-end pb-28 lg:pb-0  w-full h-full">
          <div className="flex justify-center w-full px-16 sm:px-20 md:px-28 lg:px-0 lg:w-1/2">
            <AboutPageTitle
              title1="SOBRE"
              title2="NOSOTROS"
              paragraph="En ARDU HERMANOS, somos más que proveedores de insumos y productos para la potabilización de agua y el mantenimiento de piscinas; somos aliados comprometidos con tu éxito. Fundada con la misión de mejorar la calidad del agua y el bienestar de nuestros clientes, nuestra empresa  se especializa en ofrecer soluciones eficaces y adaptadas as las necesidades de pequeños y medianos productores."
              mb="44px"
            />
          </div>
        </div>
      </div>
      <div className="relative z-10 flex flex-col h-[400vw] w-full lg:flex-row md:h-max md:w-full">
      <div className="relative z-10 flex flex-col md:flex-row h-1/2 w-full">
        <div className="flip-card h-1/2 w-full md:h-[50vw] md:w-1/2 lg:h-[25vw] lg:w-1/2">
          <div className="flip-card-inner">
            <div
              className="flip-card-front flex flex-col bg-cover bg-center bg-no-repeat text-2xl"
              style={{
                backgroundImage: "url('/images/Backgrounds/AboutCard1.jpg')",
              }}
            >
              <h2 className="text-white font-titles md:text-xl lg:text-2xl xl:text-3xl xxl:text-4xl px-6">QUIENES SOMOS</h2>
              <IoArrowForwardCircleOutline className="block lg:hidden"/>

            </div>
            <div className="flip-card-back bg-lightBlue flex items-center justify-center p-6 xs:text-[20px] sm:text-[24px] md:text-[18px] lg:text-[12px] xl:text-[14px] xxl:text-[18px] font-body">
              <p className="text-white">Nuestra empresa, fundada por Alfredo Ardu en 1957. Comenzó  con la planta de hipoclorito de sodio, Electro S.A.C.I. Con el tiempo, nos expandimos y en 1982 nos transformamos en sociedad anónima, estableciendo nuestra sede en Chacras de la Merced.</p>
            </div>
          </div>
        </div>
        <div className="flip-card h-1/2 w-full md:h-[50vw] md:w-1/2 lg:h-[25vw] lg:w-1/2">
          <div className="flip-card-inner">
            <div
              className="flip-card-front flex flex-col bg-cover bg-center bg-no-repeat text-2xl"
              style={{
                backgroundImage: "url('/images/Backgrounds/AboutCard2.jpg')",
              }}
            >
              <h2 className="text-white font-titles md:text-xl lg:text-2xl xl:text-3xl xxl:text-4xl px-6">NUESTROS VALORES</h2>
              <IoArrowForwardCircleOutline className="block lg:hidden"/>

            </div>
            <div className="flip-card-back bg-greyArdu flex flex-col items-center justify-center p-6 xs:text-[20px] sm:text-[24px] md:text-[18px] lg:text-[12px] xl:text-[14px] xxl:text-[18px] font-body">
              <p className="text-white pb-5">COMPROMISO: Nos dedicamos a ofrecer productos de alta calidad y soluciones efectivas.</p>
              <p className="text-white pb-5">INNOVACIÓN: Buscamos constantemente las últimas tecnologías y métodos para mejorar el servicio.</p>
              <p className="text-white">RESPONSABILIDAD: Actuamos con integridad, respetando el medioambiente y las normativas vigentes para un futuro sostenible.</p>
            </div>
          </div>
        </div>
      </div>
              <div className="relative z-10 flex flex-col md:flex-row h-1/2 w-full">

        <div className="flip-card h-1/2 w-full md:h-[50vw] md:w-1/2 lg:h-[25vw] lg:w-1/2">
          <div className="flip-card-inner">
            <div
              className="flip-card-front flex flex-col bg-cover bg-center bg-no-repeat text-2xl"
              style={{
                backgroundImage: "url('/images/Backgrounds/AboutCard3.jpg')",
              }}
            >
              <h2 className="text-white font-titles md:text-xl lg:text-2xl xl:text-3xl xxl:text-4xl px-6">NUESTRA VISION</h2>
              <IoArrowForwardCircleOutline className="block lg:hidden"/>

            </div>
            <div className="flip-card-back bg-gray flex items-center justify-center p-6 xs:text-[20px] sm:text-[24px] md:text-[18px] lg:text-[12px] xl:text-[14px] xxl:text-[18px] font-body">
              <p className="text-white">Ser líder en soluciones de potabilización de agua y mantenimiento de piscinas para pequeños y medianos productores, destacandonos  por nuestra calidad, innovación y excelente servicio al cliente. Aspiramos a ser el socio confiable que facilita el acceso a agua limpia y el mantenimiento óptimo de piscinas, contribuyendo al bienestar y exito de nuestros clientes.</p>
            </div>
          </div>
        </div>
        <div className="flip-card h-1/2 w-full md:h-[50vw] md:w-1/2 lg:h-[25vw] lg:w-1/2">
          <div className="flip-card-inner">
            <div
              className="flip-card-front flex flex-col bg-cover bg-center bg-no-repeat text-2xl"
              style={{
                backgroundImage: "url('/images/Backgrounds/AboutCard4.jpg')",
              }}
            >
              <h2 className="text-white font-titles md:text-xl lg:text-2xl xl:text-3xl xxl:text-4xl px-6">NUESTRA EMPRESA</h2>
              <IoArrowForwardCircleOutline className="block lg:hidden"/>

            </div>
            <div className="flip-card-back bg-darkBlue flex items-center justify-center p-6 xs:text-[20px] sm:text-[24px] md:text-[18px] lg:text-[12px] xl:text-[14px] xxl:text-[18px] font-body">
              <p className="text-white">En nuestra empresa, cada cliente es una prioridad.  Nos dedicamos a ofrecer un servicio personalizado y cercano, proporcionando asesoramientop experto y soluciones adaptadas a sus necesidades específicas. Nuestro equipo está siempre disponible para resolver dudas, ofrecer soporte técnico y asegurar una experiencia de compra satisfactoria. Creemos en construi relaciones duraderas basadas en la confianza y satisfacción mutua.</p>
            </div>
          </div>
        </div>
              </div>
              </div>
      <div
        className="relative z-20 -mt-20 overflow-visible bg-aboutPage2-sm bg-aboutPage2-lg bg-cover bg-center lg:bg-left bg-no-repeat w-full h-[113vh]"/>

      <Contact />
    </>
  );
};

export default AboutPage;
