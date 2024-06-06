import SectionTitle from "../../components/Common/SectionTitle";
import SegmentSingleProduct from "../../components/Products/segmentSingleProduct";
import productsData from "../../components/Products/industriasData";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ardu Hermanos > Industrias",
  description: "Productos para Industrias",
  // other metadata
};

const Industrias = () => {
  return (
    <>
      <div className=" z-10 overflow-hidden h-[60vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/Products/Industrias.gif')"
  }}>
          </div>

      <section className="pb-[120px] pt-[120px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/Backgrounds/background6B.svg')"
  }}>
      <div className="container -mt-20">
          <SectionTitle
            title="Productos para procesos industriales"
            paragraph="En nuestro catálogo de productos químicos para industrias, encontrarás una amplia selección de compuestos diseñados para optimizar procesos productivos y garantizar estándares de calidad superiores. Desde agentes de limpieza y desengrasantes hasta inhibidores de corrosión y productos especializados para tratamiento de efluentes, ofrecemos soluciones integrales que ayudarán a mejorar la eficiencia y la rentabilidad de tu empresa"
            center
          />
          <div className="-mt-10">

          </div>
          <div className="grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2 lg:grid-cols-3 text-justify">
            {productsData.map((product) => (
              <SegmentSingleProduct key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Industrias;
