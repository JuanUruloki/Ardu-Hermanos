import Carousel from "../Carousel/carousel";
import SectionTitle from "../Common/SectionTitle";
import SingleProduct from "./SingleProduct";
import productsData from "./productsData";

const Products = () => {
  return (
    <>
      <section id="productos" className="py-16 md:py-20 lg:py-28">
        <div className="container ">
          <SectionTitle
            title="Productos"
            paragraph="Químicos Industriales y productos para piletas"
            center
          />
          
          {/* <Carousel /> */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3 text-justify">
            {productsData.map((product) => (
              <SingleProduct key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
