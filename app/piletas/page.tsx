import SectionTitle from "../../components/Common/SectionTitle";
import Contact from "@/components/Contact";
import productsData from "../../components/Products/productsData";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ardu Hermanos > Piletas",
  description: "Productos para piletas",
  // other metadata
};

const Piletas = () => {
 
  const piletas = productsData.filter(
    (product) => product.paragraph === "PILETAS",
  );
  return (
    <>
      <div className=" z-10 h-[80vh] overflow-hidden bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 h-full w-full overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute left-0 top-0 hidden h-full w-full object-cover md:block"
            src="/videos/Piletas.mp4"
          />
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute left-0 top-0 block h-full w-full object-cover md:hidden"
            src="/videos/PiletasMobile.mp4"
          />
        </div>
      </div>

      <section
        className="relative z-10 flex h-[1550px] w-full flex-col overflow-hidden bg-opacity-80 from-gray to-white bg-cover lg:bg-center xxs:bg-right-bottom bg-no-repeat py-0 dark:bg-white "
        style={{
          backgroundImage:
            "url('/images/Products/PiletasIndividual.png')",
        }}
      >
        <div className="flex h-full w-screen flex-col ">
          <div className="flex h-1/2 flex-row">
            <div className="xxs:hidden lg:block h-full lg:w-1/3 xl:w-1/2 "></div>
            <div className="flex h-full xxs:w-full lg:w-2/3 xl:w-1/2 items-center mt-28 md:px-28 xxs:px-6 xs:px-12 ">
              <SectionTitle
                title1=""
                title1a="PILETAS"
                title2="MANTENIMIENTO DE"
                paragraph1="Nuestra línea de productos químicos para el cuidado de piletas está diseñada para garantizar agua cristalina y segura en todo momento."
                paragraph2="Ofrecemos desinfectantes de amplio espectro que eliminan bacterias y virus, reguladores de pH que mantienen el equilibrio químico del agua, y algicidas que previenen la proliferación de algas. Además, nuestros clarificadores mejoran la transparencia del agua, asegurando una experiencia de natación placentera. Cada producto de nuestra línea ha sido cuidadosamente seleccionado para mantener tu pileta en óptimas condiciones, proporcionando tranquilidad y disfrute a tus momentos de recreación. Contamos con soluciones de alta calidad y un equipo de expertos listo para asesorarte en el cuidado de tu piscina."
                center
              />
            </div>
          </div>

          <div className="flex flex-row xxs:justify-start xxs:items-start xxs:mt-36 md:mt-28 xxl:-mt-48  lg:justify-center lg:items-start xl:items-center h-full w-screen ">
          <div className="flex w-full items-center justify-center mx-0 px-6 md:px-6 text-black ">
              <ul className="xs:text-4xl xl:text-7xl">
              {piletas.map((product) => (
                    <li
                      className="font-body tracking-wide lg:tracking-widest text-lg xxs:text-xl xs:text-2xl md:text-3xl xl:text-5xl font-bold"
                      key={product.id}
                    >
                      {product.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </>
  );
};

export default Piletas;
