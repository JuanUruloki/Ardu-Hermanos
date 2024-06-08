import SectionTitle from "../../components/Common/SectionTitle";
import SegmentSingleProduct from "../../components/Products/segmentSingleProduct";

import productsData from "../../components/Products/plantasPotabilizadorasData";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ardu Hermanos > Plantas potabilizadoras",
  description: "Productos para plantas potabilizadoras",
  // other metadata
};

const PlantasPotabilizadoras = () => {
  return (
    <>
      <div className=" z-10 overflow-hidden h-[60vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/Products/Plantas_potabilizadoras.gif')"
  }}>
          </div>

      <section className="pb-[120px] pt-[100px] bg-cover bg-top bg-no-repeat" style={{ backgroundImage: "url('/images/Backgrounds/background6B.svg')"
  }}>
      <div className="container -mt-12">
          <SectionTitle
            title="Productos para el tratamiento de agua"
            paragraph="En nuestra empresa, ofrecemos una gama completa de productos químicos diseñados específicamente para plantas potabilizadoras. Desde coagulantes y floculantes hasta desinfectantes de última generación, nos comprometemos a proporcionar soluciones de alta calidad que garanticen la pureza y seguridad del agua potable para comunidades y municipios"
            center
          />
          <div className="-mt-6 mb-6 bg-greyArdu bg-opacity-40 rounded-lg px-6 py-6 ">

          <div className="grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2 lg:grid-cols-3 text-justify">
            {productsData.map((product) => (
              <SegmentSingleProduct key={product.id} product={product} />
            ))}
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PlantasPotabilizadoras;
