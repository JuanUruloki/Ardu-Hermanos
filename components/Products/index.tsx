// import Carousel from "../Carousel/carousel";
import Carousel from "@/components/Carousel";

import SectionTitle from "../Common/SectionTitle";
import SingleProduct from "./SingleProduct";
import productsData from "./productsData";

const Products = () => {
  return (
    <>
      <section id="productos" className="py-16 md:py-20 lg:py-28">
        <div className="container ">
          <SectionTitle
            title="Nuestros Productos"
            paragraph=""
            center
          />
          <div className="-mt-10">

          <Carousel />
          </div>
          {/* <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3 text-justify">
            {productsData.map((product) => (
              <SingleProduct key={product.id} product={product} />
            ))}
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Products;
