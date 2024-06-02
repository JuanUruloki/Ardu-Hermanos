import SectionTitle from "../../components/Common/SectionTitle";
import SingleProduct from "../../components/Products/SingleProduct";
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
      {/* <Breadcrumb
        pageName="Plantas Potabilizadoras"
        description=""
      /> */}
      <div className=" z-10 overflow-hidden h-[60vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/Products/Plantas_potabilizadoras.gif')"
  }}>
          </div>

      <section className="pb-[120px] pt-[120px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/Backgrounds/background6B.svg')"
  }}>
      <div className="container">
          <SectionTitle
            title="Productos para el tratamiento de agua"
            paragraph="En nuestra empresa, ofrecemos una gama completa de productos químicos diseñados específicamente para plantas potabilizadoras. Desde coagulantes y floculantes hasta desinfectantes de última generación, nos comprometemos a proporcionar soluciones de alta calidad que garanticen la pureza y seguridad del agua potable para comunidades y municipios"
            center
          />
          <div className="-mt-10">

          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3 text-justify">
            {productsData.map((product) => (
              <SingleProduct key={product.id} product={product} />
            ))}
          </div>
        </div>
        {/* <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>

          <div
            className="wow fadeInUp -mx-4 flex flex-wrap"
            data-wow-delay=".15s"
          >
            <div className="w-full px-4">
              <ul className="flex items-center justify-center pt-8">
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    Prev
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    1
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    2
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    3
                  </a>
                </li>
                <li className="mx-1">
                  <span className="flex h-9 min-w-[36px] cursor-not-allowed items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color">
                    ...
                  </span>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    12
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    Next
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
      </section>
    </>
  );
};

export default PlantasPotabilizadoras;
