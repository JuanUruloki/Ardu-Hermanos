import Contact from "@/components/Contact";
import SectionTitle from "../../components/Common/SectionTitle";
import plantasPotabilizadorasData from "@/components/Products/plantasPotabilizadorasData";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ardu Hermanos - Plantas potabilizadoras",
  description: "Productos para plantas potabilizadoras",
};

const PlantasPotabilizadoras = () => {
  const plantasPotabilizadoras = plantasPotabilizadorasData.filter(
    (product) => product.paragraph === "PLANTAS POTABILIZADORAS",
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
            src="https://res.cloudinary.com/dsf3qr13z/video/upload/v1722432580/ArduHnos/p1dy4eupbkcwlobs8mzm.mp4"
          />
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute left-0 top-0 block h-full w-full object-cover md:hidden"
            src="https://res.cloudinary.com/dsf3qr13z/video/upload/v1722432564/ArduHnos/p9pkaxpfzezajohma0bq.mp4"
          />
        </div>
      </div>

      <section
        className="relative z-10 flex h-[1550px] w-full flex-col overflow-hidden bg-opacity-80 from-gray to-white bg-cover lg:bg-center xxs:bg-right-bottom bg-no-repeat py-0 dark:bg-white "
        style={{
          backgroundImage:
            "url('/images/Products/PlantasPotabilizadorasIndividual.png')",
        }}
      >
        <div className="flex h-full w-screen flex-col ">
          <div className="flex h-1/2 flex-row">
            <div className="xxs:hidden lg:block h-full lg:w-1/3 xl:w-1/2 "></div>
            <div className="flex h-full xxs:w-full lg:w-2/3 xl:w-1/2 items-center mt-28 md:px-28 xxs:px-6 xs:px-12 ">
              <SectionTitle
                title1a=""
                title1="PLANTAS"
                title2="POTABILIZADORAS"
                paragraph1="En nuestra empresa, ofrecemos una gama completa de productos químicos diseñados específicamente para plantas potabilizadoras."
                paragraph2="Desde coagulantes y floculantes que mejoran la sedimentación y clarificación del agua, hasta desinfectantes de última generación que eliminan patógenos y garantizan la salubridad del agua potable. Nos comprometemos a proporcionar soluciones de alta calidad que aseguren la pureza y seguridad del agua para comunidades y municipios. Nuestro enfoque integral abarca desde la selección de productos hasta el soporte técnico, asegurando que cada planta potabilizadora opere con la máxima eficiencia y cumpla con los estándares regulatorios más estrictos."
                center
              />
            </div>
          </div>

          <div className="flex flex-row xxs:justify-start xxs:items-start xxs:mt-36 md:mt-28 xxl:-mt-48  lg:justify-center lg:items-start xl:items-center h-full w-screen ">
          <div className="flex w-full items-center justify-center mx-0 px-6 md:px-6 text-black ">
              <ul className="xs:text-4xl xl:text-7xl">
              {plantasPotabilizadoras.map((product) => (
                    <li
                      className="font-body tracking-wide lg:tracking-widest xxs:text-lg xs:text-xl md:text-2xl xl:text-3xl font-bold"
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

export default PlantasPotabilizadoras;
