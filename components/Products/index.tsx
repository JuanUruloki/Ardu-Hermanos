import Image from "next/image";
import ProductsTitle from "../Common/ProductsTitle";
import productsData from "./productsData";

const Products = () => {
  const plantasPotabilizadoras = productsData.filter(
    (product) => product.paragraph === "PLANTAS POTABILIZADORAS",
  );
  const industrias = productsData.filter(
    (product) => product.paragraph === "INDUSTRIAS",
  );
  const piletas = productsData.filter(
    (product) => product.paragraph === "PILETAS",
  );

  return (
    <section className="relative z-10 bg-opacity-80 from-gray to-white bg-cover bg-center bg-no-repeat py-0 dark:bg-white ">
      <div className="flex h-full flex-col">
        <div
          className="flex flex-col-reverse lg:flex-row items-center justify-end xxs:h-[1300px] lg:h-[830px] bg-cover xxs:bg-center bg-left-top bg-products-lg bg-products-sm"
        >
          <div className="w-full h-auto md:w-1/2 items-center lg:px-6 xxs:pt-20 md:pt-28 lg:pt-48">
            <ProductsTitle
              title="NUESTROS PRODUCTOS"
              paragraph1="En nuestra empresa, ofrecemos una gama completa de productos
              químicos diseñados específicamente para plantas potabilizadoras."
              paragraph2="Desde coagulantes y floculantes hasta desinfectantes de última
              generación, nos comprometemos a proporcionar soluciones de alta
              calidad que garanticen la pureza y seguridad del agua potable para
              comunidades y municipios"
              center
            />
          </div>
          <div className="absolute xs:top-[-90px] xxs:top-[-75px] right-0 w-full md:w-2/3 lg:w-1/2 xxl:w-2/5 xs:h-[180px] xxs:h-[150px] bg-gradient-to-r from-gray via-gray  flex flex-row shadow-lg overflow-visible">
        <div className="w-3/5 pl-10 flex flex-col items-start justify-center relative z-10">
          <p className="xl:text-3xl md:text-2xl xs:text-xl xxs:text-lg font-titles">SERVICIO A GRANEL</p>
          <p className="xl:text-xl md:text-lg xs:text-base xxs:text-sm font-body">Ofrecemos venta a granel de productos quimicos para plantas potabilizadoras e industrias</p>
        </div>
        <div className="absolute top-[-130px] right-0 w-2/5 h-[300px] bg-contain bg-center bg-no-repeat overflow-visible"
        style={{ backgroundImage: "url('/images/Products/camion.png')" }}
        >
        </div>
      </div>
        </div>
        <div className="flex flex-wrap w-full">
          <div
            className="mb-24 flex flex-col h-[830px] w-full justify-start items-center xxs:pt-20 lg:flex-row lg:justify-start lg:py-0 bg-cover bg-center bg-plantas-lg bg-plantas-sm"
          >
            <div className="flex w-full md:w-1/2 items-center justify-center px-6 md:px-20 text-black ">
              <ul className="text-2xl xs:text-4xl lg:text-6xl">
                <p className="font-titles">PLANTAS</p>
                <p className="font-body mb-4 text-xl xs:text-4xl lg:text-5xl tracking-widest">
                  POTABILIZADORAS
                </p>
                {plantasPotabilizadoras.map((product) => (
                  <li className="font-body tracking-wide lg:tracking-widest text-lg xs:text-2xl lg:text-3xl font-bold" key={product.id}>
                    {product.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className="mb-24 flex flex-col h-[830px] w-full justify-start items-center xxs:pt-20  lg:flex-row lg:justify-end lg:py-0 bg-cover bg-center bg-piletas-lg bg-piletas-sm"
          >
            <div className="flex w-full md:w-1/2 items-center justify-center px-6 md:px-20 font-body text-xl md:text-2xl text-black">
              <ul className="text-2xl xs:text-4xl lg:text-6xl">
                <p className="font-titles">MANTENIMIENTO</p>
                <p className="font-body mb-4 text-xl xs:text-4xl lg:text-5xl tracking-widest">DE PILETAS</p>
                {piletas.map((product) => (
                  <li className="font-body tracking-wide lg:tracking-widest text-lg xs:text-2xl lg:text-3xl font-bold" key={product.id}>
                    {product.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div
            className="flex fle-col h-[830px] w-full justify-center items-start xxs:pt-20 lg:flex-row lg:justify-start lg:items-center lg:py-0 bg-cover bg-center bg-industrias-lg bg-industrias-sm"
            
          >
            <div className="flex w-full md:w-1/2 items-center justify-center px-6 lg:px-20 font-body text-xl md:text-2xl text-black">
              <ul className="text-2xl xs:text-4xl lg:text-6xl">
                <p className="font-titles">PRODUCTOS</p>
                <p className="font-body mb-4 text-xl xs:text-4xl lg:text-5xl tracking-widest">
                  PARA INDUSTRIAS
                </p>
                {industrias.map((product) => (
                  <li className="font-body tracking-wide lg:tracking-widest text-lg xs:text-2xl lg:text-3xl font-bold" key={product.id}>
                    {product.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
