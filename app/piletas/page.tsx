import SectionTitle from "../../components/Common/SectionTitle";
import SegmentSingleProduct from "../../components/Products/segmentSingleProduct";
import productsData from "../../components/Products/piletasData";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ardu Hermanos > Piletas",
  description: "Productos para piletas",
  // other metadata
};

const Piletas = () => {
  return (
    <>
      <div className=" z-10 overflow-hidden h-[60vh] bg-cover bg-top bg-no-repeat" style={{ backgroundImage: "url('/images/Products/Piletas.gif')"
  }}>
          </div>

      <section className="pb-[120px] pt-[120px] bg-cover bg-bottom bg-no-repeat" style={{ backgroundImage: "url('/images/Backgrounds/background6B.svg')"
  }}>
      <div className="container -mt-12">
          <SectionTitle
            title="Productos para piletas"
            paragraph="Nuestra línea de productos químicos para el cuidado de piletas está diseñada para garantizar agua cristalina y segura en todo momento. Desde desinfectantes de amplio espectro y reguladores de pH hasta algicidas y clarificadores, ofrecemos una variedad de productos de alta calidad que ayudarán a mantener tu pileta en óptimas condiciones, brindando tranquilidad y disfrute a tus momentos de recreación"
            center
          />
          <div className="-mt-6 mb-6 bg-greyArdu bg-opacity-40 rounded-lg px-6 py-6">

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

export default Piletas;
