import SectionTitle from "../../components/Common/SectionTitle";
import Contact from "@/components/Contact";
import productsData from "../../components/Products/productsData";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ardu Hermanos > Industrias",
  description: "Productos para Industrias",
  // other metadata
};

const Industrias = () => {

  const industrias = productsData.filter(
    (product) => product.paragraph === "INDUSTRIAS",
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
            src="/videos/Industrias.mp4"
          />
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute left-0 top-0 block h-full w-full object-cover md:hidden"
            src="/videos/IndustriasMobile.mp4"
          />
        </div>
      </div>

      <section
        className="relative z-10 flex h-[1550px] w-full flex-col overflow-hidden bg-opacity-80 from-gray to-white bg-cover lg:bg-center xxs:bg-right-bottom bg-no-repeat py-0 dark:bg-white "
        style={{
          backgroundImage:
            "url('/images/Products/IndustriasIndividual.png')",
        }}
      >
        <div className="flex h-full w-screen flex-col ">
          <div className="flex h-1/2 flex-row">
            <div className="xxs:hidden lg:block h-full lg:w-1/3 xl:w-1/2 "></div>
            <div className="flex h-full xxs:w-full lg:w-2/3 xl:w-1/2 items-center mt-28 md:px-28 xxs:px-6 xs:px-12 ">
              <SectionTitle
                title1=""
                title1a="INDUSTRIAS"
                title2="PRODUCTOS PARA"
                paragraph1="En nuestro catálogo de productos químicos para industrias, encontrarás una amplia selección de compuestos diseñados para optimizar procesos productivos y garantizar estándares de calidad superiores."
                paragraph2="Ofrecemos desde agentes de limpieza y desengrasantes que mantienen equipos y superficies en perfectas condiciones, hasta inhibidores de corrosión que protegen la infraestructura de tus instalaciones. También incluimos productos especializados para el tratamiento de efluentes, ayudándote a cumplir con las normativas ambientales y reducir el impacto ecológico de tus operaciones. Nuestras soluciones integrales están pensadas para mejorar la eficiencia y rentabilidad de tu empresa, brindando soporte técnico y asesoramiento personalizado."
                center
              />
            </div>
          </div>

          <div className="flex flex-row xxs:justify-start xxs:items-start xxs:mt-36 md:mt-28 xxl:-mt-48  lg:justify-center lg:items-start xl:items-center h-full w-screen ">
          <div className="flex w-full items-center justify-center mx-0 px-6 md:px-6 text-black ">
              <ul className="xs:text-4xl xl:text-7xl">
              {industrias.map((product) => (
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

export default Industrias;
