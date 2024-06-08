import SectionTitle from "../Common/SectionTitle";
import SingleProduct from "./SingleProduct";
import productsData from "./productsData";

const plantasPotabilizadoras = productsData.filter(product => product.paragraph === "PLANTAS POTABILIZADORAS")
const industrias = productsData.filter(product => product.paragraph === "INDUSTRIAS")
const piletas = productsData.filter(product => product.paragraph === "PILETAS")

const renderSegment = (title, products) => (
  <div className="mb-6 bg-greyArdu bg-opacity-30 rounded-lg px-6 py-3  ">
  <p className="h-12 text-center text-4xl font-bold mb-2">{title}</p>
  <div className="grid grid-cols-1 gap-x-6 gap-y-6 mb-6 text-justify md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <SingleProduct key={product.id} product={product} />
        ))}
      </div>
      </div>
)

const Products = () => {
  return (
    <section
      className=" relative z-10 bg-opacity-80 bg-cover bg-center bg-no-repeat shadow-2xl py-16 md:py-20 lg:py-28"
      style={{ backgroundImage: "url('/images/Backgrounds/background6B.svg')" }}
    >
      <div className="container ">
        <SectionTitle
          title="Nuestros Productos"
          paragraph="Soluciones para todas las necesidades"
          center
        />
        <div className="-mt-10"></div>
        {/* <div className="grid grid-cols-1 gap-x-6 gap-y-6 text-justify md:grid-cols-2 lg:grid-cols-3">
          {productsData.map((product) => (
            <SingleProduct key={product.id} product={product} />
          ))}
        </div> */}
        {renderSegment("Plantas potabilizadoras",plantasPotabilizadoras)}
        {renderSegment("Industrias",industrias)}
        {renderSegment("Piletas",piletas)}
      </div>
      <div className="absolute right-0 top-5 z-[-1]">
        <svg
          width="1038"
          height="1331"
          viewBox="0 0 238 531"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="422.819"
            y="-70.8145"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(51.2997 422.819 -70.8145)"
            fill="url(#paint0_linear_83:2)"
          />
          <rect
            opacity="0.3"
            x="426.568"
            y="144.886"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(51.2997 426.568 144.886)"
            fill="url(#paint1_linear_83:2)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_83:2"
              x1="517.152"
              y1="-251.373"
              x2="517.152"
              y2="459.865"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#121D2F" />
              <stop offset="1" stopColor="#121D2F" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_83:2"
              x1="455.327"
              y1="-35.673"
              x2="455.327"
              y2="675.565"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#121D2F" />
              <stop offset="1" stopColor="#121D2F" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Products;
