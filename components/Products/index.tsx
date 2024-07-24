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
          className="flex flex-col-reverse lg:flex-row items-center justify-end xxs:h-[1300px] lg:h-[1050px] bg-cover xxs:bg-bottom lg:bg-top bg-products-lg bg-products-sm"
        >
          <div className="w-full h-full md:w-1/2 items-center justify-center  lg:pr-28 xxs:pt-24 md:pt-28 lg:pt-48">
            <ProductsTitle
              title="NUESTROS PRODUCTOS"
              paragraph1="En nuestra empresa, ofrecemos una gama completa de productos químicos de alta calidad para plantas potabilizadoras, industrias y piletas."
              paragraph2="Garantizamos la pureza y seguridad del agua potable, optimizamos procesos productivos con soluciones integrales que mejoran la eficiencia y la rentabilidad, y mantenemos el agua de las piletas cristalina y segura. Nuestro compromiso es proporcionar productos eficaces que satisfagan tus necesidades específicas y mejoren tu calidad de vida."
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
        />
      </div>
        </div>
        <div className="flex flex-col lg:flex-row w-full h-auto xxs:h-[1800px] lg:h-[700px] xl:h-[900px] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/Products/segmentos.png')"}}
        >
          <div className="flex flex-col items-center  h-1/3 lg:w-1/3 lg:h-full">
          <div className="flex flex-col items-center h-1/2 ">
            <div className=" flex flex-col items-center justify-center overflow-visible lg:-mt-12 xxs:h-[250px] xxs:w-[250px] xl:h-[400px] xl:w-[400px] rounded-3xl  bg-lightBlue">
                <p className=" xxs:text-4xl xl:text-7xl font-titles">PLANTAS</p>
                <p className="font-body mb-4 xxs:text-lg xl:text-xl tracking-widest">
                  POTABILIZADORAS
                </p>
            </div>
          </div>
          <div
            className="flex flex-col h-1/2  justify-start items-center xxs:pt-20 lg:justify-start  bg-transparent"
          >
            <div className="overflow-visible bg-contain bg-top bg-no-repeat xxs:h-[125px] xxs:w-[300px] xl:h-[200px] xl:w-[500px] xxs:-mt-[200px] lg:-mt-[280px] xl:-mt-[240px] xxs:mb-4 xl:mb-6"
        style={{ backgroundImage: "url('/images/Products/camionGrande.png')" }}
            />
            <div className="flex w-full items-center justify-start mx-0 px-6 md:px-6 text-black ">
              <ul className="xs:text-4xl xl:text-6xl">
                
                {plantasPotabilizadoras.map((product) => (
                  <li className="font-body tracking-wide lg:tracking-widest text-lg xs:text-xl md:text-xl xl:text-2xl font-bold" key={product.id}>
                    {product.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          </div>
          <div className="flex flex-col items-center h-1/3 lg:w-1/3 lg:h-full" >
            <div className="h-1/2">
            <div className="flex flex-col items-center justify-center overflow-visible lg:-mt-12 xxs:h-[250px] xxs:w-[250px] xl:h-[400px] xl:w-[400px] rounded-3xl bg-gray">
                <p className="xxs:text-xl xl:text-4xl font-titles">MANTENIMIENTO</p>
                <p className="font-body mb-4 text-xl xxs:text-3xl xl:text-5xl tracking-widest">DE PILETAS</p>
            </div>
            </div>
          
          <div
            className=" flex flex-col h-1/2  justify-start items-center xxs:pt-20 lg:justify-start  bg-transparent"
          >
            <div className="overflow-visible bg-contain bg-no-repeat xxs:h-[180px] xxs:w-[180px] xl:h-[300px] xl:w-[300px] xxs:-mt-[220px] lg:-mt-[320px] xl:-mt-[320px]"
        style={{ backgroundImage: "url('/images/Products/envases.png')" }}
            />
            <div className="flex w-full items-center justify-start mx-0 px-6 md:px-6 font-body text-black">
              <ul className="text-2xl xs:text-4xl xl:text-6xl">
                
                {piletas.map((product) => (
                  <li className="font-body tracking-wide lg:tracking-widest text-lg xs:text-xl md:text-xl xl:text-2xl font-bold" key={product.id}>
                    {product.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          </div>
          <div className="flex flex-col items-center h-1/3 lg:w-1/3 lg:h-full">
            <div className="h-1/2">
              <div className="flex flex-col items-center justify-center overflow-visible lg:-mt-12 xxs:h-[250px] xxs:w-[250px] xl:h-[400px] xl:w-[400px] rounded-3xl bg-darkBlue">
                <p className="xxs:text-3xl xl:text-5xl font-titles">PRODUCTOS</p>
                <p className="font-body mb-4 xxs:text-lg xl:text-xl  tracking-widest">
                  PARA INDUSTRIAS
                </p>
              </div>
            </div>
          <div
            className=" flex flex-col h-1/2  justify-start items-center xxs:pt-20 lg:justify-start  bg-transparent"
          >
            <div className="overflow-visible bg-contain bg-top bg-no-repeat xxs:h-[180px] xxs:w-[320px] xl:h-[300px] xl:w-[500px] xxs:-mt-[220px] lg:-mt-[320px] xl:-mt-[320px]"
        style={{ backgroundImage: "url('/images/Products/envasesCamion.png')" }}
            />
            <div className="flex w-full items-center justify-start mx-0 px-6 lg:px-6 font-body text-xl md:text-2xl text-black">
              <ul className="text-2xl xs:text-4xl lg:text-6xl">
                
                {industrias.map((product) => (
                  <li className="font-body tracking-wide lg:tracking-widest text-lg xs:text-xl md:text-xl xl:text-2xl font-bold" key={product.id}>
                    {product.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
